import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'


import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productCategoryReducer,
} from './reducers/ProducReducers';
import { userLoginReducer, userDetailsReducer,userRegisterReducer} from './reducers/UserReducers';

// Combine all reducers
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productCategory: productCategoryReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});

// Create the Redux store
const middleware = [thunk]

const userInfoFromStorage = localStorage.getItem("userInfo") 
  ? JSON.parse(localStorage.getItem("userInfo"))
  :null;

const initialState={
  userLogin:{userInfo:userInfoFromStorage}

}


const store = createStore(rootReducer,initialState,  composeWithDevTools(applyMiddleware(...middleware)))


export default store
