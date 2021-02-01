import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
      dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  return (
    <>
     <Link className='btn btn-light my-3' to='/latest/products'>Back</Link> 
     {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
       <Row>
       <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
       </Col>
       <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
            </ListGroupItem>
            <ListGroupItem>
              Price: ${product.price}
            </ListGroupItem>
            <ListGroupItem>
              Description: {product.description}
            </ListGroupItem>
          </ListGroup>
          <Col md={12}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>
                        Price:
                    </Col>
                    <Col>
                      <strong>£{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>
                        Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Col>     
     </Row>
     )}
    </>
  )
}

export default ProductScreen
