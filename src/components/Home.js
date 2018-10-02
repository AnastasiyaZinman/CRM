import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
)
 }}
export default Home;
