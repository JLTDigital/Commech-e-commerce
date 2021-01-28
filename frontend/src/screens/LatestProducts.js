import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const LatestProducts = () => {
  return (
    <>
      <h1 className='mt-3 text-center'>Hottest Tech Right Now...</h1>
      <Row className='mt-3'>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default LatestProducts
