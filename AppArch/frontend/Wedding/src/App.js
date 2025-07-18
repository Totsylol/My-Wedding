import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Homepage     from './components/Homepage';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import Gallery      from './components/Gallery';
import WeddingParty from './components/WeddingParty';
import OurStory     from './components/OurStory';
import MoreInfo     from './components/MoreInfo';
import Developer    from './components/Developer';
function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        { !lightboxOpen && <Navbar /> }

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery setLightboxOpen={setLightboxOpen} />} />
          <Route path="/wedding_party" element={<WeddingParty />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/info" element={<MoreInfo />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
