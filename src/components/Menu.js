import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import  Main  from './Main.js';
// import mainImg from './img/crm.jpg';
class Menu extends Component {
    constructor() {
        super();
        this.state = {}
    }
 render() {
    return (
<div id="main-links" className="App-header">

          {/* Main Links */}
          <Link to="/">HOME</Link>
          <Link to="/clients">CLIENTS</Link>
          <Link to="/actions">ACTIONS</Link>
          <Link to="/analytics">ANALITICS</Link>
          {/* <Main /> */}
</div>
    )}}
export default Menu;
