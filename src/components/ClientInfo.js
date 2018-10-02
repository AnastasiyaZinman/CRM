import React, { Component } from 'react';
class ClientInfo extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        console.log("clientInfo page",this.props.info);
        let currentClient=this.props.info;
        return (
            <div >
                       <p>{currentClient.name}</p>
                            <p>{currentClient.email}</p>
                      
            </div>
        )
    }
}
export default ClientInfo;