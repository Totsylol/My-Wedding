import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/MainPages/Home";


function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const token = localStorage.getItem('token');


  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/">
                <Nav isVisible={isNavbarVisible} />
                <Mobilenav></Mobilenav>
                <Home setNavbarVisible={setNavbarVisible} />
                <Footer />
          </Route>
          </Switch>
          
          
      </Router>
      
    </div>
    
  );
}

export default App;
