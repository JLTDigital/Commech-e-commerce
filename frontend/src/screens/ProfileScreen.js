import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, FormControl, FormLabel, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listUserOrders } from '../actions/orderActions'
import SEO from '../components/SEO'

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListUser = useSelector(state => state.orderListUser)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListUser

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails('profile'))
        dispatch(listUserOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Row>
      <Col className='mt-4' md={4}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading && <Loader />}
        <SEO title='Commech | Profile' />
        <Form onSubmit={submitHandler}>

          <Form.Group controlId='name'>
            <FormLabel>Name</FormLabel>
              <FormControl type='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}>
              </FormControl>
          </Form.Group>

          <Form.Group controlId='email'>
            <FormLabel>Email Address</FormLabel>
              <FormControl type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}>
              </FormControl>
          </Form.Group>

          <Form.Group controlId='password'>
            <FormLabel>Password</FormLabel>
              <FormControl type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}>
              </FormControl>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <FormLabel>Confirm Password</FormLabel>
              <FormControl type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
              </FormControl>
          </Form.Group>

          <Button type='submit' variant='primary'>Update</Button>
        </Form>
        </Col>
      <Col className='mt-4' md={8}>
        <h2>My Orders</h2>
        {loadingOrders ? <Loader /> : errorOrders ? <Message variant='danger'>{errorOrders}</Message> : (
          <Table striped bordered hover responsive='sm' className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DISPATCHED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                    <i className='fas fa-times' style={{color: 'red'}}></i>
                  )}</td>
                  <td>{order.isDispatched ? order.dispatchedAt.substring(0, 10) : (
                    <i className='fas fa-times' style={{color: 'red'}}></i>
                  )}</td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light'>Details</Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  )
}

export default ProfileScreen
