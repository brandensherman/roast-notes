import axios from 'axios';

// Action Types
const ENTRY_LIST_REQUEST = 'ENTRY_LIST_REQUEST';
const ENTRY_LIST_SUCCESS = 'ENTRY_LIST_SUCCESS';
const ENTRY_LIST_FAIL = 'ENTRY_LIST_FAIL';

const ENTRY_CREATE_REQUEST = 'ENTRY_CREATE_REQUEST';
const ENTRY_CREATE_SUCCESS = 'ENTRY_CREATE_SUCCESS';
const ENTRY_CREATE_FAIL = 'ENTRY_CREATE_FAIL';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Actions
export const createEntry = (entry) => async (dispatch) => {
  try {
    dispatch({ type: ENTRY_CREATE_REQUEST });

    const { data } = await axios.post(`/api/user/entries`, entry, config);

    console.log('CREATE REDUX ---->', data);
    dispatch({
      type: ENTRY_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // check for custom error message
    dispatch({
      type: ENTRY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Actions
export const fetchEntryList = () => async (dispatch) => {
  try {
    dispatch({ type: ENTRY_LIST_REQUEST });

    const { data } = await axios.get('/api/user/entries');

    dispatch({
      type: ENTRY_LIST_SUCCESS,
      payload: data.entries,
    });
  } catch (error) {
    // check for custom error message
    dispatch({
      type: ENTRY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Entry List Reducer
export const entryListReducer = (state = { entries: [] }, action) => {
  switch (action.type) {
    case ENTRY_LIST_REQUEST:
      return { loading: true, entries: [] };
    case ENTRY_LIST_SUCCESS:
      return { loading: false, entries: action.payload };
    case ENTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    case ENTRY_CREATE_REQUEST:
      return { loading: true, ...state };
    case ENTRY_CREATE_SUCCESS:
      return { loading: false, entries: [...state.entries, action.payload] };
    case ENTRY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
