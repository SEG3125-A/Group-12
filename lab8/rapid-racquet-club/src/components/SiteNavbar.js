import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './globalStyles.css';

export default function SiteNavbar() {
    return (
        <>
            <Navbar expand="lg" className='my-4'>
                <Container>
                    <Navbar.Brand href="/" className='col-4 col-lg-auto pr-0 secondary fs-md' style={{ fontFamily: 'Newsreader, serif', fontSize: '32px' }}>Rapid Racquet Club</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-center" style={{ fontFamily: 'Inter, serif'}}>
                            <Nav.Link href="/find-a-teammate" className="mx-4 primary">Find a Teammate</Nav.Link>
                            <Nav.Link href="/book" className="mx-4 primary">Book</Nav.Link>
                            <Nav.Link href="/services" className="mx-4 primary">Services</Nav.Link>
                            <Nav.Link href="/contact-us" className="mx-4 primary">Contact Us</Nav.Link>
                            <Button style={{ borderRadius: "8px", width: '126px', height: '48px' }} className="mx-3 fw-semibold secondary-bg border-0">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}
