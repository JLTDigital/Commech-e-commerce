import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const LatestProducts = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1 className='mt-3 text-center'>Hottest Tech Right Now...</h1>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <Row className='mt-3'>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>}
    </>
  )
}

export default LatestProducts
