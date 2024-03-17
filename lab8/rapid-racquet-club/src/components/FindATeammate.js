import React from 'react'
import { Button } from 'react-bootstrap';
import './globalStyles.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function FindATeammate() {
    return (
        <>
            <div className="container mt-4 pt-4">
                <div className='mt-4'>
                    <div className='d-flex align-items-end'>
                        <p className='d-flex align-items-end' style={{ fontFamily: 'Newsreader, serif', fontSize: '64px' }}>Find a Teammate</p>
                    </div>
                    <div style={{ borderBottom: '1px solid #000' }}></div>
                </div>
            </div>
        </>
    )
}
