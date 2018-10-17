import React, { Component } from 'react';
// import '../../node_modules/font-awesome/css/font-awesome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faUserCircle, faMailBulk,faGlobeAmericas,faChartLine } from '@fortawesome/free-solid-svg-icons'
import './badges.css';
// import Badge from './Badge';
class Badges extends Component {

    render() {
        return (
            <div className="badges-container">
            <FontAwesomeIcon style={{ color: "#11b963" }}
             className="fas" icon={ faChartLine} size="5x"/>
             <FontAwesomeIcon style={{ color: "#0096ff" }}
             className="fas" icon={ faMailBulk} size="5x"/>
             <FontAwesomeIcon style={{ color: "red" }}
             className="fas" icon={ faUserCircle} size="5x"/>
             <FontAwesomeIcon style={{ color: "#f1c40f" }}
             className="fas" icon={faGlobeAmericas} size="5x"/>
             
              
          
            
            {/* {this.getBadges().map(b =>
                <Badge />)} */}
            </div>
        )
    }
}

export default Badges;