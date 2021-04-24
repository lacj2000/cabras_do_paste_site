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
            Cabras Do Paste
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to='/projects'>
              Projetos
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/members'>
              Membros
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}