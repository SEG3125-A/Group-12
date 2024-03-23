import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './globalStyles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslation } from 'react-i18next'
import PageHeader from './PageHeader'

export default function FindATeammate() {
    const { t } = useTranslation()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        info: ''
    });

    const handleChange = (e) => {
        console.log(e.target.value)

        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            experience: '',
            format: '',
            info: ''
        });
    };

    return (
        <>
            <PageHeader text={t('find-teammate-page-header')} />

            <form onSubmit={handleSubmit}>
                <div className='row container my-4'>
                    <div className='col-md-7 offset-md-3'>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="name" className="col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-1')}</label>
                            <input type="text" className="col-sm-2 form-control form-control-sm rounded-pill" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '70%' }} />
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="email" className="col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-2')}</label>
                            <input type="email" className="col-sm-2 form-control form-control-sm rounded-pill" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '70%' }} />
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="phone" className="col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-3')}</label>
                            <input type="tel" className="col-sm-2 form-control form-control-sm rounded-pill" id="phone" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '70%' }} />
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="experience" className="col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-4')}</label>
                            <select className="col-sm-2 form-control form-control-sm rounded-pill" id="experience" value={formData.experience} onChange={handleChange} style={{ width: '70%' }}>
                                <option value="">Select</option>
                                <option value="Beginner">{t('find-teammate-field-4-option-1')}</option>
                                <option value="Intermediate">{t('find-teammate-field-4-option-2')}</option>
                                <option value="Expert">{t('find-teammate-field-4-option-3')}</option>
                            </select>
                        </div>
                        <div className="form-group row mb-4 tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="format" className="col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-5')}</label>
                            <select className="col-sm-2 form-control form-control-sm rounded-pill" id="format" value={formData.format} onChange={handleChange} style={{ width: '70%' }}>
                                <option value="">Select</option>
                                <option value="singles - opponent">{t('find-teammate-field-5-option-1')}</option>
                                <option value="doubles - teammate">{t('find-teammate-field-5-option-2')}</option>
                                <option value="doubles - opponent">{t('find-teammate-field-5-option-3')}</option>
                            </select>                        </div>
                        <div className="form-group row tertiary-bg p-4 border" style={{ borderRadius: '24px' }}>
                            <label htmlFor="info" className="col-sm-3 col-form-label primary fw-semibold" style={{ fontFamily: 'Inter, serif', fontSize: '20px' }}>{t('find-teammate-field-6')}</label>
                            <textarea className="col-sm-2 form-control form-control-sm" id="info" name="info" rows="4" value={formData.info} onChange={handleChange} style={{ width: '70%', borderRadius: '24px' }}></textarea>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='tertiary-bg border' style={{ width: '399px', height: 'auto', fontFamily: 'Inter, serif', fontSize: '20px', borderRadius: '24px' }}>
                            <p style={{ margin: '24px' }}>
                                {t('find-teammate-card-description')}
                            </p>
                        </div>
                        <div className="d-flex align-items-end" style={{ width: '399px', height: '580px' }}>
                            <Button type='submit' style={{ borderRadius: "8px", width: '100%', height: '48px' }} className="fw-semibold secondary-bg border-0">{t('find-teammate-submit')}</Button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}
