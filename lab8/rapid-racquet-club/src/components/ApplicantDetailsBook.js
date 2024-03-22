import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Breadcrumb, Button } from 'react-bootstrap';
import './globalStyles.css';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';



export default function ApplicantDetailsBook() {
    const [currentStep, setCurrentStep] = useState(2); // Initial step

    const m = {
        1: "/book",
        2: "/book/details",
        3: "/book/payment",
    }

    return (
        <>
            <div className="container mt-4 pt-4">
                <div className='row mt-4'>
                    <div className='col-md-5 d-flex align-items-end'>
                        <p className='d-flex align-items-end' style={{ fontFamily: 'Newsreader, serif', fontSize: '64px' }}>Applicant Details</p>
                    </div>
                    <div className='col-md-7 d-flex align-items-center primary'>
                        <Breadcrumb>
                            <Breadcrumb.Item as={Link} to={m[1]} active onClick={() => setCurrentStep(1)} style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>1. Select Booking Type</Breadcrumb.Item>
                            <Breadcrumb.Item as={Link} to={m[2]} active onClick={() => setCurrentStep(2)} style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>2. Enter Applicant Details</Breadcrumb.Item>
                            <Breadcrumb.Item as={Link} to={m[3]} active onClick={() => setCurrentStep(3)} style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>3. Enter Payment Details</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div style={{ borderBottom: '1px solid #000' }}></div>

                </div>
            </div>
            <div className='container my-4'>
                    <form>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="name" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>Name</label>
                            <input type="text" className="col-sm-2 form-control form-control-sm rounded-pill" id="name" name="name" style={{ width: '70%' }} />
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="email" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>Email</label>
                            <input type="email" className="col-sm-2 form-control form-control-sm rounded-pill" id="email" name="email" style={{ width: '70%' }} />
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="phone" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>Phone</label>
                            <input type="tel" className="col-sm-2 form-control form-control-sm rounded-pill" id="phone" name="phone" style={{ width: '70%' }} />
                        </div>
                        <div className='d-flex container justify-content-end'>
                            <Link to={m[3]}>
                                <Button style={{ borderRadius: "8px", width: '347px', height: '48px', marginTop: '100px' }} className="mx-3 fw-semibold secondary-bg border-0">Continue to Applicant Details</Button>
                            </Link>
                        </div>
                    </form>
            </div>


        </>



    )
}
