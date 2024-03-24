import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';
import OptionCard from './OptionCard'
import PageHeader from './PageHeader'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Services() {
    const { t } = useTranslation()
    return (
        <>
            <PageHeader text={t('services-card-title-1')} />

            <div className='d-flex justify-content-center' style={{ gap: '32px', marginTop: '40px' }}>
                <OptionCard imageSrc={'../book-book-a-course.png'} cardTitle={t('courses-card-title-1')} description={t('courses-card-description-1')} />
                <OptionCard imageSrc={'../book-drop-in.png'} cardTitle={t('courses-card-title-2')} description={t('courses-card-description-2')} />
                <OptionCard imageSrc={'../book-event.png'} cardTitle={t('courses-card-title-3')} description={t('courses-card-description-3')} />
            </div>

            <div className='container'>
                <Link to={'/services'}>
                    <Button style={{ borderRadius: "8px", width: '347px', height: '48px', marginTop: '100px' }} className="mx-3 fw-semibold bg-secondary border-0">{t('back-to-services')}</Button>
                </Link>
            </div>    
        </>
    )
}
