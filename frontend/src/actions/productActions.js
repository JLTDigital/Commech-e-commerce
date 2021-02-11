import axios from 'axios'
import { 
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
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

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/latest/products')

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST })

    const { data } = await axios.get('/api/products/all')

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const retroProducts = () => async (dispatch) => {
  try {
    dispatch({ type: RETRO_LIST_REQUEST })

    const { data } = await axios.get('/api/retro')

    dispatch({
      type: RETRO_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: RETRO_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const computerLaptopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: COMPUTER_LAPTOP_LIST_REQUEST })

    const { data } = await axios.get('/api/computers-laptops')

    dispatch({
      type: COMPUTER_LAPTOP_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: COMPUTER_LAPTOP_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const smartphoneProducts = () => async (dispatch) => {
  try {
    dispatch({ type: SMARTPHONE_LIST_REQUEST })

    const { data } = await axios.get('/api/smartphones')

    dispatch({
      type: SMARTPHONE_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: SMARTPHONE_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const vrProducts = () => async (dispatch) => {
  try {
    dispatch({ type: VR_LIST_REQUEST })

    const { data } = await axios.get('/api/vr')

    dispatch({
      type: VR_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: VR_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/product/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST
    })

    const {userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    await axios.delete(`/api/product/${id}`, config)

    dispatch({
      type: PRODUCT_DELETE_SUCCESS
    })

  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}