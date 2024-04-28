import React from 'react';
import "./Main.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img className='nav-logo' src='../images/logonew.png' alt=''  />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-lg-0" style={{ maxHeight: '80vh' }} navbarScroll>
                            <Nav.Link><Link  className='text-dec nav' to='/'>Home</Link></Nav.Link>
                            <NavDropdown title="About US" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link className='text-dec nav' to="/Gallery">Gallery</Link></NavDropdown.Item>
                                <NavDropdown.Item>
                                 <Link className='text-dec nav' to='/Trainers'>Trainers</Link>   
                                </NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link> <Link className='text-dec nav' to='/Construction'>Service</Link></Nav.Link>
                            <Nav.Link><Link className='text-dec nav' to='/Membership'>Membership</Link></Nav.Link>
                            <Nav.Link><Link className='text-dec nav' to='/Contactus'>Contact US</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
