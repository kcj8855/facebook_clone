import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import {
  Main,
  ChanJoong,
  ChunSung,
  JongTae,
} from './pages'
import styled from 'styled-components'

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid grey;
  border-radius: 8px;
  color: skyblue;
  &: hover {
    color: green;
    background: #ddd
  }
`

const Space = styled.div`
  height: 20px;
`

class App extends Component {
  render() {
    const activeStyle = {
      color: 'white',
      backgroundColor: 'grey'
    }
    return (
      <div>
        <Space />
        <Link exact to ='/' activeStyle={activeStyle}>메인</Link>
        <Link exact to ='/chanjoong' activeStyle={activeStyle}>찬중</Link>
        <Link exact to ='/chunsung' activeStyle={activeStyle}>춘성</Link>
        <Link exact to ='/jongtae' activeStyle={activeStyle}>종태</Link>
        <Space />
        <Route exact path='/' component={Main} />
        <Route exact path='/chanjoong' component={ChanJoong} />
        <Route exact path='/chunsung' component={ChunSung} />
        <Route exact path='/jongtae' component={JongTae} />
      </div>
    );
  }
}

export default App;
