import React from 'react';
import { GlobalStyle } from './App.style';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Store from './pages/Store/Store';
import Favorites from './pages/Favorites/Favorites'
import Checkout from './pages/Checkout/Checkout';

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
              <Route exact path="/" component={Home} />
              <Route path='/favorite' component={Favorites} />
              <Route path="/store" component={Store} />
              <Route path="/about" component={About} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
      </Router>
    );
  }

}

export default App;
