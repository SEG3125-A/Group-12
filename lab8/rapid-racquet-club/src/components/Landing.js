import React from 'react'
import './globalStyles.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next'

export default function Landing() {
    const { t } = useTranslation()

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '75px' }}>
                <div className="text-center">
                    <p style={{ fontFamily: 'Newsreader, serif', fontSize: '64px', maxWidth: '1020px', padding: '0 15px' }} className="primary display-4">{t('landing-jumbo')}</p>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center primary" style={{ marginTop: '75px' }}>
                <p style={{ fontFamily: 'Inter, serif', fontSize: '20px', maxWidth: '736px', padding: '0 15px' }}><Trans>{t('landing-description')}</Trans></p >
            </div >

            <div className="d-flex justify-content-center align-items-center primary" style={{ marginTop: '75px' }}>
                <Link to="/services">
                    <Button style={{ borderRadius: "8px", width: '289px', height: '64px', fontFamily: 'Inter, serif', fontSize: '20px' }} className="mx-3 fw-semibold secondary-bg border-0 mb-4">{t('landing-button')}</Button>
                </Link>
            </div>

            <div className="d-flex justify-content-center align-items-center primary p-4" style={{ marginTop: '50px', marginBottom: '75px', gap: '20px', overflow: 'hidden' }}>
                <img src='landing-court.png' style={{
                    maxWidth: '45%',
                    height: 'auto',
                }} alt="Court" />
                <img src='landing-racquet.png' style={{
                    maxWidth: '45%',
                    height: 'auto',
                }} alt="Racquet" />
            </div>

            <div className="d-flex justify-content-center align-items-center primary my-4">
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 fw-semibold">
                        <p style={{ fontSize: '14px', fontFamily: 'Inter, serif' }}>{t('landing-leading')}</p>
                    </div>
                    <div className="col-md-8 d-flex justify-content-center">
                        <p style={{ marginBottom: '300px', fontFamily: 'Inter, serif', fontSize: '20px', maxWidth: '822px' }}>{t('landing-description-2')}</p>
                    </div>
                </div>
            </div >
        </>
    )
}
