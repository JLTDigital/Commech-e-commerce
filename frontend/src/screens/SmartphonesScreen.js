import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import ProductNav from '../components/productDetailsNav'
import Paginate from '../components/Paginate'
import { smartphoneProducts } from '../actions/productActions'

const SmartphonesScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const smartphoneList = useSelector(state => state.smartphoneList)
  const { loading, error, products, page, pages } = smartphoneList

  useEffect(() => {
    dispatch(smartphoneProducts(pageNumber))
  }, [dispatch, pageNumber])

  return (
    <>
      <h1 className='mt-3 text-center'>Smartphones</h1>
      <ProductNav />
      {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : (
      <>
      <Row 
      className='mt-3'>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={6} xl={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Paginate pages={pages} page={page} />
      </>
      )}
    </>
  )
}

export default SmartphonesScreen
