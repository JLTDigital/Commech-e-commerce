import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image } from 'react-bootstrap'
import Commech from '../images/coverHome.png'
import Retro from '../images/retroHome.jpg'
import Computer from '../images/computerHome.jpg'
import Smartphone from '../images/smartphoneHome.jpg'
import Vr from '../images/vrHome.jpg'
import ProductCarousel from '../components/ProductCarousel'
import SEO from '../components/SEO'


const HomeScreen = () => {

  return (
    <>
    <SEO />
      <Row>
        <Col md={12}>
          <Image src={Commech} fluid /> 
        </Col>
        <Col className='text-center' md={12}>
          <h1 className='text-center mt-5'>Bringing you the latest and hottest Tech</h1>
          <Link to='/latest/products' className='btn btn-dark my-5'>Latest</Link>
        </Col>
      </Row>

      <ProductCarousel />

      <Row className='mt-5'>
        <Col className='tech' md={6}>
          <h1 className=''>Retro Consoles</h1>
          <Image className='hp-img' src={Retro} fluid />
          <Link to='/retro' className='btn btn-home btn-dark my-5'>Retro</Link>
        </Col>
        <Col className='tech' md={6}>
          <h1 className='text-right'>Computers / Laptops</h1>
          <Image className='hp-img' src={Computer} fluid />
          <Link to='/computers-laptops' className='btn btn-home btn-dark my-5'>Computers / Laptops</Link>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col className='tech' md={6}>
          <h1 className=''>Smartphones</h1>
          <Image className='hp-img' src={Smartphone} fluid />
          <Link to='/smartphones' className='btn btn-home btn-dark my-5'>Smartphones</Link>
        </Col>
        <Col className='tech' md={6}>
          <h1 className='text-right'>Virtual Reality</h1>
          <Image className='hp-img' src={Vr} fluid />
          <Link to='/vr' className='btn btn-home btn-dark my-5'>VR</Link>
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
