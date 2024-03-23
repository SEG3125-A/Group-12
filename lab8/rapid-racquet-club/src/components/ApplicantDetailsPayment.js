import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Breadcrumb, Button } from 'react-bootstrap';
import './globalStyles.css';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'




export default function ApplicantDetailsPayment() {
    const { t } = useTranslation()
    const m = {
        1: "/book",
        2: "/book/details",
        3: "/book/payment",
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        return;
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    return (
        <>
            <div className="container mt-4 pt-4">
                <div className='row mt-4'>
                    <div className='col-md-5 d-flex align-items-end'>
                        <p className='d-flex align-items-end' style={{ fontFamily: 'Newsreader, serif', fontSize: '64px' }}>{t('payment-page-header')}</p>
                    </div>
                    <div className='col-md-7 d-flex align-items-center primary'>
                        <Breadcrumb>
                            <Breadcrumb.Item as={Link} to={m[1]} active style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('payment-breadcrumb-1')}</Breadcrumb.Item>
                            <Breadcrumb.Item as={Link} to={m[2]} active style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('payment-breadcrumb-2')}</Breadcrumb.Item>
                            <Breadcrumb.Item as={Link} to={m[3]} active style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('payment-breadcrumb-3')}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div style={{ borderBottom: '1px solid #000' }}></div>

                </div>

            </div>
            <div className='container my-4'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                        <label htmlFor="name" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('payment-field-1')}</label>
                        <input type="text" className="col-sm-2 form-control form-control-sm rounded-pill" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '70%' }} required />
                    </div>
                    <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                        <label htmlFor="cardNumber" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('payment-field-2')}</label>
                        <input type="text" className="col-sm-2 form-control form-control-sm rounded-pill" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} style={{ width: '70%' }} pattern="[0-9]+" required />
                    </div>
                    <div className="form-group row mb-4" style={{ borderRadius: '24px' }}>
                        <div className='col-sm-6 tertiary-bg p-4 border' style={{ borderRadius: '24px' }}>
                            <label htmlFor="expiryDate" className="col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('payment-field-3')}</label>
                            <input maxLength={"5"} type="text" className="col-sm-2 form-control form-control-sm rounded-pill" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} style={{ width: '70%' }} pattern="(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})" required />

                        </div>
                        <div className='col-sm-5 offset-sm-1 tertiary-bg p-4 border' style={{ borderRadius: '24px' }}>
                            <label htmlFor="cvv" className="col-sm-2 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('payment-field-4')}</label>
                            <input pattern="[0-9]{3}" type="text" maxLength={"3"} className="col-sm-2 form-control form-control-sm rounded-pill" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} style={{ width: '70%' }} required />

                        </div>
                    </div>

                    <div className='d-flex container justify-content-end'>
                        <Button type="submit" style={{ borderRadius: "8px", width: '347px', height: '48px', marginTop: '100px' }} className="mx-3 fw-semibold secondary-bg border-0">{t('payment-submit')}</Button>
                    </div>
                </form>

            </div>
        </>



    )
}
