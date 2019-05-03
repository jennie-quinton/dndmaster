import { combineReducers } from 'redux';
import characters from './characterReducer';
import auth from './authReducer';

export default combineReducers({
  characters,
  auth,
});
