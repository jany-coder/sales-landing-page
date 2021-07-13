import React from 'react';
import { Navbar, NavItem, Nav, Form, Button, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import headerBg from '../../assets/header-bg.png';
import headerCircle from '../../assets/header-circle.png';
import './NavHeader.scss';

const NavHeader = () => {
    return (
        <section className="nav-section container-fluid">
            <div>
                <Row>
                    <Col md={4}>
                        <img className="header-circle" src={headerCircle} alt="bg" />   
                    </Col>
                    <Col md={8}>
                        <div>
                             <img className="header-img-bg pl-4" src={headerBg} alt="bg" />   
                        </div>
                    </Col>
                </Row>
            </div>
            <Navbar expand="lg">
                <nav className="container menu-text">
                    <div>
                        <Navbar.Brand href="#"><a href="#home"> <img className="logo" src={logo} alt="Product" /></a></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="padding-width-22 text-white" href="#home">Home</Nav.Link>
                            <Nav.Link className="padding-width-22 text-white" href="#service">Service</Nav.Link>
                            <Nav.Link className="padding-width-22 text-white" href="#product">Product</Nav.Link>
                            <Nav.Link className="padding-width-22 text-white" href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <button className="button-round-nav">Shop Now</button>
                        </Form>
                    </Navbar.Collapse>
                </nav>
            </Navbar>
        </section>
    );
};

export default NavHeader;