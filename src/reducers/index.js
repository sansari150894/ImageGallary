import { combineReducers } from 'redux';
import home from './home';
import fav from './fav';
import auth from './auth'

export default combineReducers({
  home,
  fav,
  auth,
})