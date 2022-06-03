import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../../fonts/fonts.css'
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" className='justify-content-center border-top border-5 border-danger'>
    <Container>
    <Navbar.Collapse id="basic-navbar-nav" className='col-4'>
        <Nav className="me-auto d-flex ps-5 align-items-center">
          <Nav.Link href="/home" className='text-danger fs-3 pe-5 secondaryfont align-self'>home</Nav.Link>
          <Nav.Link href="/category/fpyy" className='text-light fs-5 pe-5 secondaryfont'>Funcional, Pilates y Yoga</Nav.Link>
          <Nav.Link href="/category/mm" className='text-light fs-5 pe-5 secondaryfont'>Maquinas de Musculacion</Nav.Link>
          <Nav.Link href="/category/pdb" className='text-light fs-5 pe-5 secondaryfont'>Pesas, Discos y Barras</Nav.Link>
          <Nav.Link href="/category/pyr" className='text-light fs-5 pe-5 secondaryfont'>Proteccion y Rehabilitacion</Nav.Link>
          <Nav.Link href="/category/mc" className='text-light fs-5 pe-5 secondaryfont'>Maquinas Cardiovasculares</Nav.Link>
          <CartWidget />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar

