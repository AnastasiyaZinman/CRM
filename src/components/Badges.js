import React, { Component } from 'react';
// import '../../node_modules/font-awesome/css/font-awesome.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faUserCircle, faMailBulk,faGlobeAmericas,faChartLine } from '@fortawesome/free-solid-svg-icons'
import './badges.css';
// import Badge from './Badge';
class Badges extends Component {


    componentDidMount() {
        this.getDataForBadge();
      }
    getDataForBadge(){
        axios.get('http://localhost:5000/getDataForBadges')
        .then(result => {
          console.log(result);
        //   this.setState({ badges: result.data })
        })
      }

getBadges = () => { 
 return (
    [<FontAwesomeIcon style={{ color: "#11b963" }}
    className="fas" icon={ faChartLine} size="6x"/>,
    <FontAwesomeIcon style={{ color: "#0096ff" }}
    className="fas" icon={ faMailBulk} size="5x"/>,
    <FontAwesomeIcon style={{ color: "red" }}
    className="fas" icon={ faUserCircle} size="5x"/>,
    <FontAwesomeIcon style={{ color: "#f1c40f" }}
    className="fas" icon={faGlobeAmericas} size="5x"/>])
    }

    render() {
        return (
            
             <div className="badges-container">
            {/* {this.getBadges().map(b =>
                <Badge logo={b}/>)} */}
            </div>
        )
    }
}

export default Badges;