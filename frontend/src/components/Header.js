import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap'
import Logo from '../Commech/logo.png'
import Search from '../components/Search'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='logo-container'>
              <Image className='logo' src={Logo} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <Search history={history} />} />
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>  Cart</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (<LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i> Sign in</Nav.Link>
              </LinkContainer> )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminMenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <LinkContainer to='/latest/products'>
                  <NavDropdown.Item>Latest Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/retro'>
                  <NavDropdown.Item>Retro Tech</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/computers-laptops'>
                  <NavDropdown.Item>Computers / Laptops</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/smartphones'>
                  <NavDropdown.Item>Smartphones</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/vr'>
                  <NavDropdown.Item>Virtual reality</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
