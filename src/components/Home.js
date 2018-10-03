import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import mainImg from './img/crm.jpg';
class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }
 render() {
    return (
<div id="main-links" className="App-header">

          {/* Main Links */}
          <Link to="/clients">clients</Link>
          <Link to="/actions">actions</Link>
          <Link to="/analytics">analytics</Link>
</div>
//  <div>
//     <img className="main-img" src={mainImg} alt="crm"/>
// </div> 
    )}}
export default Home;
