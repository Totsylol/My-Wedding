import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import WeddingParty from "./components/WeddingParty";
import OurStory from './components/OurStory';
import MoreInfo from './components/MoreInfo';


function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false); // Control Navbar visibility

  return (
    <div className="App">
      <Router>
        {/* Conditionally render Navbar */}
        {!lightboxOpen && <Navbar />}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/gallery">
            <Gallery setLightboxOpen={setLightboxOpen} /> {/* Pass setter to Gallery */}
          </Route>
          <Route path="/wedding_party">
        <WeddingParty />
        </Route>
        <Route path="/Our Story">
      <OurStory/>
      </Route>
      <Route path="/info">
  <MoreInfo />
</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
