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
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page }
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
      return { loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page }
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
      return { loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page }
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
      return { loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page }
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
      return { loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page }
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

export const productCreateReducer = (state = {}, action) => {
  switch(action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch(action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_UPDATE_RESET:
      return { product: {} }
    default:
      return state
  }
}

export const productCreateReviewReducer = (state = {}, action) => {
  switch(action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}