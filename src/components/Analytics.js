import React, { Component } from 'react';
import Badges from './Badges';
// import Charts from './Charts';


class Analytics extends Component {

    render() {
        return (
            <div className="container">
                 <Badges /> 
                {/* <Charts /> */} 
            </div>
        );
    }
}

export default Analytics;