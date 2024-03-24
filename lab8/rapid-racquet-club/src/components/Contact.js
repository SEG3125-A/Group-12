import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './globalStyles.css';
import 'bootstrap/dist/css/bootstrap.css';
import PageHeader from './PageHeader'
import { useTranslation, Trans } from 'react-i18next'

export default function Contact() {
    const { t } = useTranslation()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiry: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const [validated, setValidated] = useState(false)
    const [submissionResult, setSubmissionResult] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }
        else {
            setSubmissionResult(true)
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            inquiry: ''
        });
    }

    return (
        <>
            <PageHeader text={t('contact-page-header')} />
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                <div className='row container my-4'>
                    <div className='col-md-7 offset-md-3'>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="name" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('contact-field-1')}</label>
                            <input required type="text" className="col-sm-2 form-control form-control-sm rounded-pill" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '70%' }} />
                            <div className="invalid-feedback">
                                {t('form-error-name')}
                            </div>
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="email" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('contact-field-2')}</label>
                            <input required type="email" className="col-sm-2 form-control form-control-sm rounded-pill" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '70%' }} />
                            <div className="invalid-feedback">
                                {t('form-error-email')}
                            </div>
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="phone" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('contact-field-3')}</label>
                            <input pattern='[0-9]+' required type="tel" className="col-sm-2 form-control form-control-sm rounded-pill" id="phone" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '70%' }} />
                            <div className="invalid-feedback">
                                {t('form-error-phone')}
                            </div>
                        </div>
                        <div className="form-group row tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="inquiry" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('contact-field-4')}</label>
                            <textarea required className="col-sm-2 form-control form-control-sm" id="inquiry" name="inquiry" rows="4" value={formData.inquiry} onChange={handleChange} style={{ width: '70%', borderRadius: '24px' }}></textarea>
                            <div className="invalid-feedback">
                                {t('form-error-inquiry')}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='tertiary-bg border' style={{ width: '399px', height: '312px', fontFamily: 'Inter, serif', fontSize: '20px', borderRadius: '24px' }}>
                            <p style={{ margin: '24px' }}>
                                <Trans>{t('contact-info-card-text')}</Trans>
                            </p>
                        </div>
                        <div className="d-flex flex-column align-items-end mt-4" style={{ width: '399px', height: '180px' }}>
                            <Button type='submit' style={{ borderRadius: "8px", width: '100%', height: '48px' }} className="fw-semibold secondary-bg border-0">{t('contact-submit')}</Button>
                            {submissionResult && (
                                <div className='secondary' style={{ fontFamily: 'Inter, serif', fontSize: '20px', width: '100%' }}>{t('form-success')}</div>
                            )}
                        </div>
                    </div>

                </div>
            </Form>
        </>
    )
}
