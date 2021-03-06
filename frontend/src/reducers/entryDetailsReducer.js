import axios from 'axios';

// Action Types
const ENTRY_DETAILS_REQUEST = 'ENTRY_DETAILS_REQUEST';
const ENTRY_DETAILS_SUCCESS = 'ENTRY_DETAILS_SUCCESS';
const ENTRY_DETAILS_FAIL = 'ENTRY_DETAILS_FAIL';

const ENTRY_DELETE_REQUEST = 'ENTRY_DELETE_REQUEST';
const ENTRY_DELETE_SUCCESS = 'ENTRY_DELETE_SUCCESS';
const ENTRY_DELETE_FAIL = 'ENTRY_DELETE_FAIL';

// Actions
export const fetchEntryDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ENTRY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/user/entries/${id}`);

    dispatch({
      type: ENTRY_DETAILS_SUCCESS,
      payload: data.entry,
    });
  } catch (error) {
    // check for custom error message
    dispatch({
      type: ENTRY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteEntry = (id) => async (dispatch) => {
  try {
    dispatch({ type: ENTRY_DELETE_REQUEST });

    const { data } = await axios.delete(`/api/user/entries/${id}`);

    if (data) {
      dispatch({
        type: ENTRY_DELETE_SUCCESS,
      });
    }
  } catch (error) {
    // check for custom error message
    dispatch({
      type: ENTRY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Entry Details Reducer
export const entryDetailsReducer = (state = { entry: {} }, action) => {
  switch (action.type) {
    case ENTRY_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ENTRY_DETAILS_SUCCESS:
      return { loading: false, entry: action.payload };
    case ENTRY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case ENTRY_DELETE_REQUEST:
      return { loading: true, ...state };
    case ENTRY_DELETE_SUCCESS:
      return { loading: false };
    case ENTRY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
