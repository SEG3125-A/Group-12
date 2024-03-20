import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';
import OptionCard from './OptionCard'
import PageHeader from './PageHeader'

export default function Services() {
    const handleCardClick = (title) => {
    };

    return (
        <>
            <PageHeader text={'Services'} />

            <div className='d-flex justify-content-center' style={{ gap: '32px', marginTop: '40px' }}>
                <OptionCard imageSrc={'book-book-a-course.png'} cardTitle={'Courses'} description={'Level up your game.'} altText={'View a List of Badminton Courses'} destinationLink={'/wip'} />
                <OptionCard imageSrc={'book-drop-in.png'} cardTitle={'Drop in Programs'} description={'Ready to compete? All skill levels welcomed.'} altText={'View Available Slots'} destinationLink={'/wip'} />
                <OptionCard imageSrc={'book-event.png'} cardTitle={'Reserve Court for an Event'} description={'Want to host an event? Select here.'} altText={'View Available Dates'} destinationLink={'/wip'} />
            </div>
        </>
    )
}
