import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Breadcrumb, Button } from 'react-bootstrap';
import './globalStyles.css';
import OptionCard from './OptionCard'
import ApplicantDetailsBook from './ApplicantDetailsBook';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader'

export default function Booking() {
    const [activeCard, setActiveCard] = useState(null);

    const m = {
        1: "/book",
        2: "/book/details",
        3: "/book/payment",
    }

    const [currentStep, setCurrentStep] = useState(1); // Initial step

    // Function to handle going to the previous step
    const goToPreviousStep = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    // Function to handle going to the next step
    const goToNextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handleCardClick = (title) => {
        setActiveCard(title);
    };

    return (
        <>
            <PageHeader text={'Book'} />
            <div className='d-flex justify-content-center' style={{ gap: '32px', marginTop: '40px' }}>
                <OptionCard imageSrc={'book-book-a-course.png'} cardTitle={'Book a Course'} onClick={() => handleCardClick('Book a Course')} isActive={activeCard === 'Book a Course'} destinationLink={'/book'} />
                <OptionCard imageSrc={'book-drop-in.png'} cardTitle={'Book a Drop-In Session'} onClick={() => handleCardClick('Book a Drop-In Session')} isActive={activeCard === 'Book a Drop-In Session'} destinationLink={'/book'} />
                <OptionCard imageSrc={'book-event.png'} cardTitle={'Book Court for an Event'} onClick={() => handleCardClick('Book Court for an Event')} isActive={activeCard === 'Book Court for an Event'} destinationLink={'/book'} />
            </div>
            {activeCard &&
                <div className='d-flex container justify-content-end'>
                    <Button style={{ borderRadius: "8px", width: '347px', height: '48px', marginTop: '100px' }} className="mx-3 fw-semibold secondary-bg border-0" onClick={() => goToNextStep()}>Continue to Applicant Details</Button>
                </div>}
        </>
    )
}
