import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './globalStyles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslation } from 'react-i18next'
import PageHeader from './PageHeader'

export default function FindATeammate() {
    const { t } = useTranslation()

    const [submissionResult, setSubmissionResult] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        format: '',
        info: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const [validated, setValidated] = useState(false)
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
            experience: '',
            format: '',
            info: ''
        })
    }

    return (
        <>
            <PageHeader text={t('find-teammate-page-header')} />

            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                <div className='row my-4'>
                    <div className='col-md-5 offset-md-2'>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="name" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-1')}</label>
                            <input required type="text" className="col-sm-2 form-control form-control-sm rounded-pill" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '70%' }} />
                            <div className="invalid-feedback">
                                {t('form-error-name')}
                            </div>
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="email" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-2')}</label>
                            <input required type="email" className="col-sm-2 form-control form-control-sm rounded-pill" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '70%' }} />
                            <div className="invalid-feedback">
                                {t('form-error-email')}
                            </div>
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="phone" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-3')}</label>
                            <input pattern='[0-9]+' required type="tel" className="col-sm-2 form-control form-control-sm rounded-pill" id="phone" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '70%' }} />
                            <div className="invalid-feedback">
                                {t('form-error-phone')}
                            </div>
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="experience" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-4')}</label>
                            <select required className="col-sm-2 form-control form-control-sm rounded-pill" id="experience" name="experience" value={formData.experience} onChange={handleChange} style={{ width: '70%' }}>
                                <option value="">Select</option>
                                <option value="Beginner">{t('find-teammate-field-4-option-1')}</option>
                                <option value="Intermediate">{t('find-teammate-field-4-option-2')}</option>
                                <option value="Expert">{t('find-teammate-field-4-option-3')}</option>
                            </select>
                            <div className="invalid-feedback">
                                {t('form-error-experience')}
                            </div>
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="format" className="required col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-5')}</label>
                            <select required className="col-sm-2 form-control form-control-sm rounded-pill" id="format" name="format" value={formData.format} onChange={handleChange} style={{ width: '70%' }}>
                                <option value="">Select</option>
                                <option value="singles - opponent">{t('find-teammate-field-5-option-1')}</option>
                                <option value="doubles - teammate">{t('find-teammate-field-5-option-2')}</option>
                                <option value="doubles - opponent">{t('find-teammate-field-5-option-3')}</option>
                            </select>
                            <div className="invalid-feedback">
                                {t('form-error-format')}
                            </div>
                        </div>
                        <div className="form-group row tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="info" className="col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-6')}</label>
                            <textarea className="col-sm-2 form-control form-control-sm" id="info" name="info" rows="4" value={formData.info} onChange={handleChange} style={{ width: '70%', borderRadius: '24px' }}></textarea>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='tertiary-bg border' style={{ height: 'auto', fontFamily: 'Inter, serif', fontSize: '20px', borderRadius: '24px' }}>
                            <p style={{ margin: '24px' }}>
                                {t('find-teammate-card-description')}
                            </p>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
                            <Button type='submit' style={{ borderRadius: "8px", width: '100%', height: '48px' }} className="fw-semibold secondary-bg border-0">{t('find-teammate-submit')}</Button>
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
