import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import {
  Main,
  ChanJoong,
  ChunSung,
  JongTae,
} from './pages'

class App extends Component {
  render() {
    return (
      <div>
        <NavLink exact to ='/'>메인</NavLink>
        <Route exact path='/' component={Main} />
        <Route exact path='/chanjoong' component={ChanJoong} />
        <Route exact path='/chunsung' component={ChunSung} />
        <Route exact path='/jongtae' component={JongTae} />
      </div>
    );
  }
}

export default App;
