import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../sidemenubar/_sidemenu.scss';

class SideNavigation extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="navigation"  className="d-xl-none d-lg-none">
                    <Container>
                        <Navbar.Brand href="#home" className="text-uppercase section-title">Silicon Hills</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/shopping">Shopping</Nav.Link>
                                <Nav.Link href="/dining">Dining</Nav.Link>
                                <Nav.Link href="/offices">Offices</Nav.Link>
                                <Nav.Link href="/#">Events</Nav.Link>
                                <Nav.Link href="/#">Nature</Nav.Link>
                                <Nav.Link href="/#">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="sticky-sidemenu  d-none d-lg-block d-xl-block">
                    <div className="menu-logo active">
                        <Link to="/" className="menu-brand">Silicon Hills</Link>
                    </div>
                    <div className="sidemenu-list">
                        <Link to="/shopping" className="menu-links">Shopping</Link>
                        <Link to="/dining" className="menu-links">Dining</Link>
                        <Link to="/offices" className="menu-links">Offices</Link>
                        <Link to="/#" className="menu-links">Events</Link>
                        <Link to="/#" className="menu-links">Nature</Link>
                        <Link to="/#" className="menu-links">Contact</Link>
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}

export default SideNavigation;
