import React, { Component } from 'react';

import {Detail} from './pages/Detail'
import {Home} from './pages/home'
import { Switch, Route } from 'react-router-dom'
import { NotFound} from './pages/NotFound'

import './desing/App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
