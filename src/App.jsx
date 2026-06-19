import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Works from './pages/Works.jsx';
import DesignWork from './pages/DesignWork.jsx';
import TestPortfolio from './pages/TestPortfolio.jsx';

function App() {

  return (
    <Router basename="/sudeera_perera">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Works />} />
        <Route path="/design" element={<DesignWork />}/>
        <Route path="/test" element={<TestPortfolio />}/>
      </Routes>
    </Router>
  );
}

export default App
