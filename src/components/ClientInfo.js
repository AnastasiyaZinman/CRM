import React, { Component } from 'react';
import './clientInfo.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
class ClientInfo extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    closeBox =()=>{
        this.props.closeBox()
    }
    render() {
        console.log("clientInfo page", this.props.info);
        let currentClient = this.props.info;
        const fullName = currentClient.name.split(" ");
        return (
            <div className="modal-body">
                <button type="button" className="close" onClick={this.closeBox}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <h5>Change Details</h5>
                <div className="container">
                    <div className="row">
                        <div className="col col-w">Name:</div>
                        <div className="col col-w">{fullName[0]}</div>
                        <div className="w-100"></div>
                        <div className="col col-w">Surname:</div>
                        <div className="col col-w">{fullName[1]}</div>
                        <div className="w-100"></div>
                        <div className="col col-w">Country:</div>
                        <div className="col col-w">{currentClient.country}</div>
                </div>
                <button type="button" className="btn btn-info btn-update">Update</button>
                {/* <input type="button" className="btn btn-info" value="Input Button" /> */}
                </div>
                </div>

                )
            }
        }
export default ClientInfo;