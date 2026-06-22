import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Works from './pages/Works.jsx';
import DesignWork from './pages/DesignWork.jsx';
import TestPortfolio from './pages/TestPortfolio.jsx';
import SocialMediaKit from './pages/SocialMediaKit.jsx';

function App() {

  return (
    <Router basename="/">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Works />} />
        <Route path="/design" element={<DesignWork />}/>
        <Route path="/test" element={<TestPortfolio />}/>
        <Route path="/social-media-kit" element={<SocialMediaKit />}/>

      </Routes>
    </Router>
  );
}

export default App
