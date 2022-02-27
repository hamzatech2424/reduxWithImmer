import {combineReducers} from 'redux';
import AuthReducer from './authReducer'
import CartReducer from './cartReducer'
import ProductReducer from './productReducer'



const rootReducer = combineReducers({
    AuthReducer,
    CartReducer,
    ProductReducer
  });
  export default rootReducer;