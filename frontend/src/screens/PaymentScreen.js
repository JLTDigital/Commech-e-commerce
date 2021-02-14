import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckOutSteps from '../components/CheckOutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import SEO from '../components/SEO'

const PaymentScreen = ({ history }) => {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, SetPaymentMethod] = useState('Paypal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <SEO title='Commech | Payment' />
      <CheckOutSteps step1 step2 step3/>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check type='radio' label='Paypal or Credit Card' id='paypal' name='paymentMethod' value='Paypal' checked onChange={(e) => SetPaymentMethod(e.target.value)}></Form.Check>
          </Col>
        </Form.Group>

          <Button type='submit' variant='primary'>
            Continue to Payment
          </Button>
      </Form>
    </FormContainer>
  )
}  

export default PaymentScreen