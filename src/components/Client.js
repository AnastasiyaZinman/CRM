import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClientInfo from './ClientInfo';

class Client extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    getClientInfo = () => {
        console.log("info",this.props.info);
        this.props.getClientInfo(this.props.info);
    }
   
    render() {
        const clientInfo=this.props.info;
        const fullName=clientInfo.name.split(" ");
        // console.log("ClientInfo",fullName[0], " ", fullName[1]);
        return (

                <div className="row row-regular text-center" onClick={this.getClientInfo} id={clientInfo._id}>
                {/* <Link to={this.props.link} key={clientInfo.id}> */}
                  <div className="col-md-1">{fullName[0]}</div>
                    <div className="col-md-2">{fullName[1]}</div>
                    <div className="col-md-1">{clientInfo.country}</div>
                    <div className="col-md-2 email">{clientInfo.firstContact}</div>
                    <div className="col-md-3 email"> {clientInfo.email}</div>
                    <div className="col-md-1">{(clientInfo.sold)?"YES":"Nooo"}</div>
                    <div className="col-md-2">{clientInfo.owner}</div>
                {/* </Link> */}
                </div>
        )
    }
}
export default Client;
