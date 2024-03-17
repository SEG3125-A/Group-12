import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';

export default function OptionCard({ imageSrc, cardTitle, onClick, isActive }) {
    return (
        <div className={`tertiary-bg border cursor-pointer position-relative ${isActive ? 'active-card' : ''}`} style={{ maxWidth: '395px', height: '350px', borderRadius: '29px' }} onClick={onClick}>
            <img src={imageSrc} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '29px', position: 'relative', zIndex: '0' }}></img>
            <div className='d-flex mx-3 my-2'>
                <p className='primary fw-semibold' style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{cardTitle}</p>
            </div>
        </div >
    );
}


