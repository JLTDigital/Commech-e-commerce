import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

SEO.defaultProps = {
  title: 'Welcome To Commech',
  description: 'Bringing you the hottest and latest tech',
  keywords: 'tech, technology, electronics, smartphones, laptops, computers, vr, virtual reality, retro consoles'
}

export default SEO
