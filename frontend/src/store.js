import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, retroListReducer, computerLaptopListReducer, smartphoneListReducer, vrListReducer } from './reducers/productReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  retroList: retroListReducer,
  computerLaptopList: computerLaptopListReducer,
  smartphoneList: smartphoneListReducer,
  vrList: vrListReducer  
})

const initialState = {}

const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store