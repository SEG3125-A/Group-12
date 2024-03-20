import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Breadcrumb, Button } from 'react-bootstrap';
import './globalStyles.css';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';

export default function ApplicantDetailsPayment() {
    const m = {
        1: "/book",
        2: "/book/details",
        3: "/book/payment",
    }

    return (
        <div className="container mt-4 pt-4">
            <div className='row mt-4'>
                <div className='col-md-5 d-flex align-items-end'>
                    <p className='d-flex align-items-end' style={{ fontFamily: 'Newsreader, serif', fontSize: '64px' }}>Payment Details</p>
                </div>
                <div className='col-md-7 d-flex align-items-center primary'>
                    <Breadcrumb>
                        <Breadcrumb.Item as={Link} to={m[1]} active style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>1. Select Booking Type</Breadcrumb.Item>
                        <Breadcrumb.Item as={Link} to={m[2]} active style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>2. Enter Applicant Details</Breadcrumb.Item>
                        <Breadcrumb.Item as={Link} to={m[3]} active style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>3. Enter Payment Details</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div style={{ borderBottom: '1px solid #000' }}></div>

            </div>
        </div>
    )
}
