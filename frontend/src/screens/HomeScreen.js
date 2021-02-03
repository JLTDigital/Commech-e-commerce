import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image } from 'react-bootstrap'
import Commech from '../Commech/cover.png'
import Retro from '../Commech/retro.jpg'
import Computer from '../Commech/computer.jpg'
import Smartphone from '../Commech/smartphone.jpg'
import Vr from '../Commech/vr.jpg'

const HomeScreen = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <Image src={Commech} fluid /> 
        </Col>
        <Col className='text-center' md={12}>
          <h1 className='text-center mt-5'>Bringing you the latest and hottest Tech</h1>
          <Link to='/latest/products' className='btn btn-dark my-5'>Latest</Link>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col className='tech' md={12}>
          <h1 className=''>Retro Consoles</h1>
          <Image src={Retro} fluid />
        </Col>
        <Col className='text-center' md={12}>
          <Link to='/retro' className='btn btn-home btn-dark my-5'>Retro</Link>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col className='tech' md={12}>
          <h1 className='text-right'>Computers / Laptops</h1>
          <Image src={Computer} fluid />
        </Col>
        <Col className='text-center' md={12}>
          <Link to='/computers-laptops' className='btn btn-home btn-dark my-5'>Computers / Laptops</Link>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col className='tech' md={12}>
          <h1 className=''>Smartphones</h1>
          <Image src={Smartphone} fluid />
        </Col>
        <Col className='text-center' md={12}>
          <Link to='/smartphones' className='btn btn-home btn-dark my-5'>Smartphones</Link>
        </Col>
      </Row>
    

      <Row className='mt-5'>
        <Col className='tech' md={12}>
          <h1 className='text-right'>Virtual Reality</h1>
          <Image src={Vr} fluid />
        </Col>
        <Col className='text-center' md={12}>
          <Link to='/vr' className='btn btn-home btn-dark my-5'>VR</Link>
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
