import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
