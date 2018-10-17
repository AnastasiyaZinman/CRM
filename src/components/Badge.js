import React, { Component } from 'react';
class Badge extends Component {
    constructor() {
        super();
        this.state = {
         
        };
    }

    render() {
        return (
            <div className="badge">
                <div className="badge-icon" style={{ backgroundColor: this.props.color }}>{this.props.icon}</div>
                    <div className="badge-val">{this.state.value}</div>
                <div className="badge-label">{this.props.label}</div>
            </div>
        );
    }
}

export default Badge;