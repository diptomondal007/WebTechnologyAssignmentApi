import { combineReducers } from "redux";
import postReducer from  './posts';
import flashMessages from './flashMessages';
import auth from './auth';
export default combineReducers({

  posts:postReducer,
  flashMessages,
  auth

});
