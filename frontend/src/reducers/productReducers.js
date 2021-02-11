import { 
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  RETRO_LIST_REQUEST,
  RETRO_LIST_SUCCESS,
  RETRO_LIST_FAIL,
  COMPUTER_LAPTOP_LIST_REQUEST,
  COMPUTER_LAPTOP_LIST_SUCCESS,
  COMPUTER_LAPTOP_LIST_FAIL,
  SMARTPHONE_LIST_REQUEST,
  SMARTPHONE_LIST_SUCCESS,
  SMARTPHONE_LIST_FAIL,
  VR_LIST_REQUEST,
  VR_LIST_SUCCESS,
  VR_LIST_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const  allProductsListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case ALL_PRODUCTS_REQUEST:
      return { loading: true, products: [] }
    case ALL_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }
    case ALL_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const retroListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case RETRO_LIST_REQUEST:
      return { loading: true, products: [] }
    case RETRO_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case RETRO_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const computerLaptopListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case COMPUTER_LAPTOP_LIST_REQUEST:
      return { loading: true, products: [] }
    case COMPUTER_LAPTOP_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case COMPUTER_LAPTOP_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const smartphoneListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case SMARTPHONE_LIST_REQUEST:
      return { loading: true, products: [] }
    case SMARTPHONE_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case SMARTPHONE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const vrListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case VR_LIST_REQUEST:
      return { loading: true, products: [] }
    case VR_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case VR_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
  switch(action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDeleteReducer = (state = {}, action) => {
  switch(action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true }
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}