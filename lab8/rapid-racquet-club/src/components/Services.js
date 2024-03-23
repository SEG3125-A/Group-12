import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';
import OptionCard from './OptionCard'
import PageHeader from './PageHeader'
import { useTranslation } from 'react-i18next'

export default function Services() {
    const { t } = useTranslation()

    const handleCardClick = (title) => {
    };

    return (
        <>
            <PageHeader text={t('services-page-header')} />

            <div className='d-flex justify-content-center' style={{ gap: '32px', marginTop: '40px' }}>
                <OptionCard imageSrc={'book-book-a-course.png'} cardTitle={t('services-card-title-1')} description={t('services-card-description-1')} altText={t('services-card-hyper-1')} destinationLink={'/wip'} />
                <OptionCard imageSrc={'book-drop-in.png'} cardTitle={t('services-card-title-2')} description={t('services-card-description-2')} altText={t('services-card-hyper-2')} destinationLink={'/wip'} />
                <OptionCard imageSrc={'book-event.png'} cardTitle={t('services-card-title-3')} description={t('services-card-description-3')} altText={t('services-card-hyper-3')} destinationLink={'/wip'} />
            </div>
        </>
    )
}
