import { combineReducers } from 'redux';
import list from './list'
import cartItems from './cart-itmes' 

export default combineReducers({
  list,
  cartItems,
});