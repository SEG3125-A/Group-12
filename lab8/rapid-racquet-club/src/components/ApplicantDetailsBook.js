import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Breadcrumb, Button } from 'react-bootstrap';
import './globalStyles.css';

export default function ApplicantDetailsBook() {
const [currentStep, setCurrentStep] = useState(2); // Initial step
  return (
    <>
        <div className="container mt-4 pt-4">
                    <div className='row mt-4'>
                        <div className='col-md-2 d-flex align-items-end' style={{ whiteSpace: 'nowrap' }}>
                            <p className='d-flex align-items-end' style={{ fontFamily: 'Newsreader, serif', fontSize: '64px' }}>Applicant Details</p>
                        </div>
                        <div style={{ borderBottom: '1px solid #000' }}></div>
                    </div>
        </div>
        <div className='row container d-flex my-4'>
                <div className='col-md-7 offset-md-3'>
                    <form>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="name" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>Name</label>
                            <input type="text" className="col-sm-2 form-control form-control-sm rounded-pill" id="name" name="name" value onChange style={{ width: '70%' }} />
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="email" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>Email</label>
                            <input type="email" className="col-sm-2 form-control form-control-sm rounded-pill" id="email" name="email" value onChange style={{ width: '70%' }} />
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="phone" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>Phone</label>
                            <input type="tel" className="col-sm-2 form-control form-control-sm rounded-pill" id="phone" name="phone" value onChange style={{ width: '70%' }} />
                        </div>
                        <div className="form-group row tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="inquiry" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>Inquiry</label>
                            <textarea className="col-sm-2 form-control form-control-sm" id="inquiry" name="inquiry" rows="4" value onChange style={{ width: '70%', borderRadius: '24px' }}></textarea>
                        </div>
                        <Button type='submit' style={{ borderRadius: "8px", width: '347px', height: '48px', marginTop: '40px', marginBottom: '100px' }} className="mx-3 fw-semibold secondary-bg border-0">Submit</Button>
                    </form>
                </div>
            </div>

        
    </>
    

        
  )
}
