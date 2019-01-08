import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Main extends Component {
  render() {
    const activeStyle = {
      color: 'green',
      fontSize: '2rem',
    }
    return (
      <div>
        <ul>
          <li><NavLink exact to ='/chanjoong' activeStyle={activeStyle}>찬중</NavLink></li>
          <li><NavLink exact to ='/chunsung' activeStyle={activeStyle}>춘성</NavLink></li>
          <li><NavLink exact to ='/jongtae' activeStyle={activeStyle}>종태</NavLink></li>
        </ul>
      </div>
    )
  }
}
