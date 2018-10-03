import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import mainImg from './img/crm.jpg';
class Main extends Component {
    constructor() {
        super();
        this.state = {}
    }
 render() {
    return (
<div className="container">
{mainImg}         
<img className="main-img" src={mainImg} alt="crm"/>
</div> 
    )}}
export default Main;
