import React from 'react'
import './globalStyles.css'
import { Button } from 'react-bootstrap';


export default function Landing() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '75px' }}>
                <div className="text-center">
                    <p style={{ fontFamily: 'Newsreader, serif', fontSize: '64px', maxWidth: '1020px', padding: '0 15px' }} className="primary display-4">Elevating Lives, One Shuttle at a Time</p>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center primary" style={{ marginTop: '75px' }}>
                <p style={{ fontFamily: 'Inter, serif', fontSize: '20px', maxWidth: '736px', padding: '0 15px' }}><b>Rapid Racquet Club</b> is a club dedicated to teaching all ages and all skill levels of badminton. Those who know the sport well already can register for our drop in program.</p>
            </div>

            <div className="d-flex justify-content-center align-items-center primary" style={{ marginTop: '75px' }}>
                <Button style={{ borderRadius: "8px", width: '289px', height: '64px', fontFamily: 'Inter, serif', fontSize: '20px' }} className="mx-3 fw-semibold secondary-bg border-0 mb-4">View Our Services</Button>
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
                        <p style={{ fontSize: '14px', fontFamily: 'Inter, serif' }}>WHAT WE BELIEVE</p>
                    </div>
                    <div className="col-md-8 d-flex justify-content-center">
                        <p style={{ marginBottom:'300px', fontFamily: 'Inter, serif', fontSize: '20px', maxWidth: '822px' }}> Empowering Lives Through Shuttle Flight: Our Mission at Rapid Racquet Club  is to cultivate a community of spirited players, fostering sportsmanship, skill development, and a love for badminton. Together, we aim to create an environment where every smash is a step towards personal growth, camaraderie, and the pursuit of excellence on and off the court.</p>
                    </div>
                </div>
            </div >
        </>
    )
}
