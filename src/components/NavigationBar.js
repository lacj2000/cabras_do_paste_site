import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import styles from '../styles/components/NavigationBar.module.css';


export const NavigationBar = ({}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand >
          <Link to='/'>
          <img
            src="/logo.png"
            width="100px"
            height="56,25px"
            className="d-inline-block align-top"
            alt="Cabras do Paste"
          />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to='/projects'  className='nav-link' >
              Projetos
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/members'  className='nav-link'>
              Membros
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}