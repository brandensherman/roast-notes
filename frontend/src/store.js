import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';
import { userAuthReducer } from './reducers/userAuthReducer';
import { entryListReducer } from './reducers/entryListReducer';
import { entryDetailsReducer } from './reducers/entryDetailsReducer';

const reducer = combineReducers({
  user: userAuthReducer,
  entryList: entryListReducer,
  entryDetails: entryDetailsReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const intitialState = {
  user: { userInfo: userInfoFromStorage },
};

const middleware = applyMiddleware(loggingMiddleware, thunkMiddleware);

const store = createStore(reducer, intitialState, middleware);

export default store;
