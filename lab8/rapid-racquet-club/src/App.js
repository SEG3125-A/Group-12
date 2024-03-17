import './App.css';
import SiteNavbar from './components/SiteNavbar';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <>
      <SiteNavbar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} exact />
            <Route path="/find-a-teammate" element={<Landing />} exact />
            <Route path="/book" element={<Landing />} exact />
            <Route path="/services" element={<Landing />} exact />
            <Route path="/contact-us" element={<Landing />} exact />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
