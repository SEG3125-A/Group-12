import './App.css';
import SiteNavbar from './components/SiteNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Booking from './components/Booking';
import Contact from './components/Contact';
import FindATeammate from './components/FindATeammate';
import Services from './components/Services';
import ApplicantDetailsBook from './components/ApplicantDetailsBook';
import ApplicantDetailsPayment from './components/ApplicantDetailsPayment';
import WorkInProgress from './components/WorkInProgress';
import i18n from 'i18next'; // Import useTranslation here
import React, { useEffect, useState, Suspense } from 'react';
import { initReactI18next } from 'react-i18next';
import translationsEn from './translations/en.json';
import translationsFr from './translations/fr.json';


function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SiteNavbar changeLang={setLanguage} />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} exact />
            <Route path="/find-a-teammate" element={<FindATeammate />} exact />
            <Route path="/book" element={<Booking />} exact />
            <Route path="/services" element={<Services />} exact />
            <Route path="/contact-us" element={<Contact />} exact />
            <Route path="/book/details" element={<ApplicantDetailsBook />} exact />
            <Route path="/book/payment" element={<ApplicantDetailsPayment />} exact />
            <Route path="/wip" element={<WorkInProgress />} exact />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
