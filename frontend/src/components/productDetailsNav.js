import React from 'react'
import { Link } from 'react-router-dom'

const productDetailsNav = () => {
  return (
    <div className='productDetailsNav mb-3'>
      <Link className='btn btn-light my-3 item-a' to={'/latest/products'}>Latest</Link> 
      <Link className='btn btn-light my-3 item-b' to={'/retro'}>Retro</Link> 
      <Link className='btn btn-light my-3 item-c' to={'/computers-laptops'}>Computers / Laptops</Link> 
      <Link className='btn btn-light my-3 item-d' to={'/smartphones'}>smartphones</Link> 
      <Link className='btn btn-light my-3 item-e' to={'/vr'}>VR</Link> 
    </div>
  )
}

export default productDetailsNav
