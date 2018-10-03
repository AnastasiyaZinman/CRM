import React, { Component } from 'react';
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
        // console.log("clientInfo",clientInfo);
        const fullName = clientInfo.name.split(" "); //Split a string into an array of substrings
        return (
                <div className="row row-regular text-center" onClick={this.getClientInfo} id={clientInfo._id}>
                  <div className="col-md-1">{fullName[0]}</div>
                    <div className="col-md-2">{fullName[1]}</div>
                    <div className="col-md-1">{clientInfo.country}</div>
                    <div className="col-md-2 email">{clientInfo["firstContact"].slice(0,10)}</div>
                    <div className="col-md-3 email"> {(clientInfo.emailType)?clientInfo.emailType:"-"}</div>
                    <div className="col-md-1">{(clientInfo.sold) ? <span>&#10003;</span> : <span>&#10008;</span>}</div>
                    <div className="col-md-2">{clientInfo.owner}</div>
                </div>
        )
    }
}
export default Client;
