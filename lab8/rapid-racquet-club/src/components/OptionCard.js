import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';
import { Link } from 'react-router-dom';

export default function OptionCard({ imageSrc, cardTitle, onClick, isActive, description, altText, destinationLink }) {
    return (
        destinationLink ? (
          <Link to={destinationLink} style={{ textDecoration: 'none' }} className={"disabled"}>
            <div className={`tertiary-bg border cursor-pointer position-relative ${isActive ? 'active-card' : ''}`} style={{ maxWidth: '395px', maxHeight: '444px', borderRadius: '29px' }} onClick={onClick}>
              <img src={imageSrc} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '29px', position: 'relative', zIndex: '0' }} alt="Card"></img>
              <div className='mx-3 my-2 p-2'>
                <p className='primary fw-semibold' style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{cardTitle}</p>
                <p className='secondary fw-semibold' style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{altText}</p>
                <p style={{ color: '#6D6D6D', fontFamily: 'Inter, serif', fontSize: '16px' }}>{description}</p>
              </div>
            </div>
          </Link>
        ) : null
      );
}


