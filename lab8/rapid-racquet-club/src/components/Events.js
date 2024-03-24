import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';
import PageHeader from './PageHeader'
import { useTranslation } from 'react-i18next'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import i18n from 'i18next';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Events() {
    const { t } = useTranslation()
    const [date, setDate] = useState(new Date());
    const [disabledDates, setDisabledDates] = useState([]);

    useEffect(() => {
        const today = new Date();
        const disabled = [];
        for (let i = 1; i <= 31; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            if (Math.random() > 0.7) {
                disabled.push(nextDate);
            }
        }
        setDisabledDates(disabled);
    }, []);

    const tileDisabled = ({ date, view }) => {
        if (view === 'month' && date < new Date()) {
            return true;
        }
        return disabledDates.some(disabledDate =>
            date.getFullYear() === disabledDate.getFullYear() &&
            date.getMonth() === disabledDate.getMonth() &&
            date.getDate() === disabledDate.getDate()
        );
    };

    // Function to highlight the current day
    const tileClassName = ({ date, view }) => {
        if (view === 'month' && date.getDate() === new Date().getDate()) {
            return 'current-day';
        }
        return '';
    };

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <>
            <PageHeader text={t('services-card-title-3')} />

            <div className='d-flex align-items-center justify-content-center mt-4 flex-column'>
                <h2 className='primary' style={{ fontFamily: 'Inter, serif', fontSize: '20px'}}>{t('available-date-times')}</h2>
                <Calendar
                    onChange={onChange}
                    value={date}
                    tileDisabled={tileDisabled}
                    tileClassName={tileClassName}
                    locale={i18n.language}
                />
            </div>

            <div className='container'>
                <Link to={'/services'}>
                    <Button style={{ borderRadius: "8px", width: '347px', height: '48px', marginTop: '100px' }} className="mx-3 fw-semibold bg-secondary border-0">{t('back-to-services')}</Button>
                </Link>
            </div>    
        </>
    )
}
