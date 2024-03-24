import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';
import OptionCard from './OptionCard'
import PageHeader from './PageHeader'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import i18n from 'i18next';

export default function Events() {
    const { t } = useTranslation()
    const [date, setDate] = useState(new Date());
    const [disabledDates, setDisabledDates] = useState([]);

    useEffect(() => {
        // Calculate disabled dates for dates after today only once when component mounts
        const today = new Date();
        const disabled = [];
        for (let i = 1; i <= 31; i++) { // Assuming 31 days for demonstration
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            // Randomly disable dates after today
            if (Math.random() > 0.7) {
                disabled.push(nextDate);
            }
        }
        setDisabledDates(disabled);
    }, []); // Run only once on component mount

    // Function to determine if a date should be disabled
    const tileDisabled = ({ date, view }) => {
        // Disable dates before today
        if (view === 'month' && date < new Date()) {
            return true;
        }
        // Disable dates after today based on stored disabledDates
        return disabledDates.some(disabledDate =>
            date.getFullYear() === disabledDate.getFullYear() &&
            date.getMonth() === disabledDate.getMonth() &&
            date.getDate() === disabledDate.getDate()
        );
    };

    // Function to highlight the current day
    const tileClassName = ({ date, view }) => {
        if (view === 'month' && date.getDate() === new Date().getDate()) {
            return 'current-day'; // Apply custom styling to highlight the current day
        }
        return '';
    };

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <>
            <PageHeader text={t('services-card-title-3')} />

            <div className='d-flex align-items-center justify-content-center mt-4'>
                <Calendar
                    onChange={onChange}
                    value={date}
                    tileDisabled={tileDisabled} // Pass the function to the tileDisabled prop
                    tileClassName={tileClassName} // Pass the function to the tileClassName prop
                    locale={i18n.language}
                />
            </div>
        </>
    )
}
