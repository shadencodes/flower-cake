import React from 'react';
import { GlobalStyle } from './App.style';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component{
  render(){
    return(
      <Router>
        <GlobalStyle />
          <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
      </Router>
    );
  }

}

export default App;
