import React from 'react'
import { Link } from 'react-router-dom'

const productDetailsNav = () => {
  return (
    <div className='productDetailsNav mb-3'>
      <Link className='btn btn-light my-3' to={'/latest/products'}>Latest</Link> 
      <Link className='btn btn-light my-3' to={'/retro'}>Retro</Link> 
      <Link className='btn btn-light my-3' to={'/computers-laptops'}>Computers / Laptops</Link> 
      <Link className='btn btn-light my-3' to={'/smartphones'}>smartphones</Link> 
      <Link className='btn btn-light my-3' to={'/vr'}>VR</Link> 
    </div>
  )
}

export default productDetailsNav
