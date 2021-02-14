import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import ProductNav from '../components/productDetailsNav'
import Paginate from '../components/Paginate'
import SEO from '../components/SEO'
import { computerLaptopProducts } from '../actions/productActions'

const CompLapScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const computerLaptopList = useSelector(state => state.computerLaptopList)
  const { loading, error, products, page, pages } = computerLaptopList

  useEffect(() => {
    dispatch(computerLaptopProducts(pageNumber))
  }, [dispatch, pageNumber])

  return (
    <>
      <SEO title='Commech | Computer / Laptops'  />
      <h1 className='mt-3 text-center'>Computers / Laptops</h1>
      <ProductNav />
      {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : (
      <>
      <Row className='mt-3'>
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

export default CompLapScreen
