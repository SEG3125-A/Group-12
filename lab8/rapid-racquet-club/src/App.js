import './App.css';
import SiteNavbar from './components/SiteNavbar';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Booking from './components/Booking';
import Contact from './components/Contact'
import FindATeammate from './components/FindATeammate';

function App() {
  return (
    <>
      <SiteNavbar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} exact />
            <Route path="/find-a-teammate" element={<FindATeammate />} exact />
            <Route path="/book" element={<Booking />} exact />
            <Route path="/services" element={<Landing />} exact />
            <Route path="/contact-us" element={<Contact />} exact />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
