import React from 'react'
import PageHeader from './PageHeader'
import { useTranslation } from 'react-i18next'


export default function WorkInProgress() {
    const { t } = useTranslation()

    return (
        <PageHeader text={t('wip')} />

    )
}
