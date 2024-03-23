import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Breadcrumb, Button } from 'react-bootstrap';
import './globalStyles.css';
import OptionCard from './OptionCard'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

export default function Booking() {
    const { t } = useTranslation()

    const [activeCard, setActiveCard] = useState(null);

    const m = {
        1: "/book",
        2: "/book/details",
        3: "/book/payment",
    }

    const [currentStep, setCurrentStep] = useState(1);

    const handleCardClick = (title) => {
        setActiveCard(title);
    };

    return (
        <>
            <div className="container mt-4 pt-4">
                <div className='row mt-4'>
                    <div className='col-md-5 d-flex align-items-end'>
                        <p className='d-flex align-items-end' style={{ fontFamily: 'Newsreader, serif', fontSize: '64px' }}>{t('book-page-header')}</p>
                    </div>
                    <div className='col-md-7 d-flex align-items-center primary'>
                        <Breadcrumb>
                            <Breadcrumb.Item as={Link} to={m[1]} active onClick={() => setCurrentStep(1)} style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('book-breadcrumb-1')}</Breadcrumb.Item>
                            <Breadcrumb.Item as={Link} to={m[2]} active onClick={() => setCurrentStep(2)} style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('book-breadcrumb-2')}</Breadcrumb.Item>
                            <Breadcrumb.Item as={Link} to={m[3]} active onClick={() => setCurrentStep(3)} style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('book-breadcrumb-3')}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div style={{ borderBottom: '1px solid #000' }}></div>

                </div>
            </div>

            <div className='d-flex justify-content-center' style={{ gap: '32px', marginTop: '40px' }}>
                <OptionCard imageSrc={'book-book-a-course.png'} cardTitle={t('book-card-title-1')} onClick={() => handleCardClick('Book a Course')} isActive={activeCard === 'Book a Course'} destinationLink={'/book'} />
                <OptionCard imageSrc={'book-drop-in.png'} cardTitle={t('book-card-title-2')} onClick={() => handleCardClick('Book a Drop-In Session')} isActive={activeCard === 'Book a Drop-In Session'} destinationLink={'/book'} />
                <OptionCard imageSrc={'book-event.png'} cardTitle={t('book-card-title-3')} onClick={() => handleCardClick('Book Court for an Event')} isActive={activeCard === 'Book Court for an Event'} destinationLink={'/book'} />
            </div>


            <div className='d-flex container justify-content-end'>
                <Link to={'/'}>
                    <Button style={{ borderRadius: "8px", width: '347px', height: '48px', marginTop: '100px' }} className="mx-3 fw-semibold bg-secondary border-0">{t('back-to-home')}</Button>
                </Link>
                {activeCard && <Link to={m[2]}>
                    <Button style={{ borderRadius: "8px", width: '347px', height: '48px', marginTop: '100px' }} className="mx-3 fw-semibold secondary-bg border-0">{t('book-submit')}</Button>
                </Link>}
            </div>
        </>
    )
}
