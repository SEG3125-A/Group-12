import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';
import OptionCard from './OptionCard'

export default function Services() {
    const handleCardClick = (title) => {
    };

    return (
        <>
            <div className="container mt-4 pt-4">
                <div className='mt-4'>
                    <div className='d-flex align-items-end'>
                        <p className='d-flex align-items-end' style={{ fontFamily: 'Newsreader, serif', fontSize: '64px' }}>Services</p>
                    </div>
                    <div style={{ borderBottom: '1px solid #000' }}></div>
                </div>

                <div className='d-flex justify-content-center' style={{ gap: '32px', marginTop: '40px' }}>
                    <OptionCard imageSrc={'book-book-a-course.png'} cardTitle={'Courses'} description={'Level up your game.'} altText={'View a List of Badminton Courses'} />
                    <OptionCard imageSrc={'book-drop-in.png'} cardTitle={'Drop in Programs'} description={'Ready to compete? All skill levels welcomed.'} altText={'View Available Slots'} />
                    <OptionCard imageSrc={'book-event.png'} cardTitle={'Reserve Court for an Event'} description={'Want to host an event? Select here.'} altText={'View Available Dates'} />
                </div>
            </div>
        </>
    )
}
