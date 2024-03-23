import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './globalStyles.css';
import { useTranslation } from 'react-i18next'

export default function SiteNavbar() {
    const { t } = useTranslation()
    return (
        <>
            <Navbar expand="lg" className='my-4'>
                <Container>
                    <Navbar.Brand href="/" className='col-4 col-lg-auto pr-0 secondary fs-md' style={{ fontFamily: 'Newsreader, serif', fontSize: '32px' }}>{t('navbar-logo')}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-center" style={{ fontFamily: 'Inter, serif' }}>
                            <Nav.Link href="/find-a-teammate" className="mx-4 primary">{t('navbar-heading-1')}</Nav.Link>
                            <Nav.Link href="/book" className="mx-4 primary">{t('navbar-heading-2')}</Nav.Link>
                            <Nav.Link href="/services" className="mx-4 primary">{t('navbar-heading-3')}</Nav.Link>
                            <Nav.Link href="/contact-us" className="mx-4 primary">{t('navbar-heading-4')}</Nav.Link>
                            <Button style={{ borderRadius: "8px", width: '126px', height: '48px' }} className="mx-3 fw-semibold secondary-bg border-0">{t('navbar-heading-5')}</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}
