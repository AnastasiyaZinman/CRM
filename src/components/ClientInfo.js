import React, { Component } from 'react';
import './clientInfo.css';
class ClientInfo extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        console.log("clientInfo page", this.props.info);
        let currentClient = this.props.info;
        return (
           
                <div className="modal-body">
                <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                    <h5>Popover in a modal</h5>
                    <p>This <a href="#" role="button" className="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                    <hr />
                    <h5>Tooltips in a modal</h5>
                    <p><a href="#" className="tooltip-test" title="Tooltip">This link</a> and <a href="#" className="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
                <p>{currentClient.name}</p>
                <p>{currentClient.email}</p>
                </div>
        
        )
    }
}
export default ClientInfo;