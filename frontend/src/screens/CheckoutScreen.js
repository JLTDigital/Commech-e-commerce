import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckOutSteps from '../components/CheckOutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const CheckoutScreen = ({ history }) => {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postCode, setPostCode] = useState(shippingAddress.postCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postCode, country }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckOutSteps step1 step2/>
      <h1>Checkout</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
              <Form.Control type='text' placeholder='Enter Address' required value={address} onChange={(e) => setAddress(e.target.value)}>
              </Form.Control>
          </Form.Group>
          <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
              <Form.Control type='text' placeholder='Enter City' required value={city} onChange={(e) => setCity(e.target.value)}>
              </Form.Control>
          </Form.Group>
          <Form.Group controlId='postCode'>
            <Form.Label>Post Code</Form.Label>
              <Form.Control type='text' placeholder='Enter Post Code' required value={postCode} onChange={(e) => setPostCode(e.target.value)}>
              </Form.Control>
          </Form.Group>
          <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
              <Form.Control type='text' placeholder='Enter Country' required value={country} onChange={(e) => setCountry(e.target.value)}>
              </Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Continue to Payment
          </Button>
      </Form>
    </FormContainer>
  )
}  

export default CheckoutScreen