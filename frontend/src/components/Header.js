import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown, Image } from 'react-bootstrap'
import Logo from '../Commech/logo.png'

const Header = () => {
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">
              <i class="fas fa-search"></i>
            </Button>
          </Form>
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>  Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i> Sign in</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <LinkContainer to='/latest/products'>
                  <NavDropdown.Item>Latest Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='#'>
                  <NavDropdown.Item>Retro Tech</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='#'>
                  <NavDropdown.Item>Computers / Laptops</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='#'>
                  <NavDropdown.Item>Smartphones</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='#'>
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
