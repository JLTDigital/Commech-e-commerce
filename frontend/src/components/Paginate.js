import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom'
 
const Paginate = ({ pages, page, isAdmin=false }) => {
  const location = useLocation();
  const path = location.pathname;
  const baseURL = path.split('/page/')[0] === '/' ? '' : path.split('/page/')[0];

  return pages > 1 && (
    <Pagination className='justify-content-center my-3'>
      {[...Array(pages).keys()].map(x => (
        <LinkContainer key={x + 1} to={`${baseURL}/page/${x+1}`}>
          <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  );
};
 
export default Paginate;
 