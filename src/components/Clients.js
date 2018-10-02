import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Client from './Client.js'
class Clients extends Component {
    constructor() {
        super();
        this.state = {
            topNames:[{text:"Name",colSize:1},
                      {text:"Surname",colSize:2},
                      {text:"Country",colSize:1},
                      {text:"First Contract",colSize:2},
                      {text:"Email",colSize:3},
                      {text:"Sold",colSize:1},
                      {text:"Owner",colSize:2}],
            searchWord:""
        }
    }
    generateRowsInfo(){
        const clientInfo = this.props.clients;
        return clientInfo.map((item, i) => {
            // console.log("item",item);s
            return (<Client 
                // getClientInfo={this.props.getClientInfo}
                info={item}
                key={i} 
              />)   //the power of JSX!
        })  
    }
    generateOptions(){
        return this.state.topNames.map((item, i) => {
            console.log("item",item);
            return (<option
                value={item.text}
                key={i}>{item.text}
               </option>)   //the power of JSX!
        })  
    }
    generateTopRow(){
        return this.state.topNames.map((item,i) => {
            let classNameCol=`col-md-${item.colSize}`;
            return (<div className={classNameCol} key={i}>{item.text}</div>)
        }
        )}
        updateSearchText = (e) => {
            console.log(e.target.value);
            this.setState({searchWord: e.target.value})
          }
    render() {
        console.log("searchWord",this.state.searchWord);
        return (
            <div>
                 <span className="float-left ml-3 mt-2 mb-2">
                 <input type="text" id="search" className="" onChange={this.updateSearchText} value= {this.state.searchWord} placeholder="Search.." /></span>
                 <div className="float-left ml-3 mt-2 mb-2">
                    <select>
                    {this.generateOptions()}
                    </select> 
                </div>
                <div className="row row-main rounded">
                {this.generateTopRow()}
                    {/* <div className="col-md-1">Name</div>
                    <div className="col-md-2">Surname</div>
                    <div className="col-md-1">Country</div>
                    <div className="col-md-2">First Contract</div>
                    <div className="col-md-3">Email</div>
                    <div className="col-md-1">Sold</div>
                    <div className="col-md-2">Owner</div> */}
                </div> 
                <span>{this.generateRowsInfo()}</span>
            </div>
        )
    }
}
export default Clients;
