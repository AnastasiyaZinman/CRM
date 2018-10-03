import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Client from './Client.js';
import ClientInfo from './ClientInfo';
class Clients extends Component {
    constructor() {
        super();
        this.state = {
            topNames:[{text:"Name",colSize:1},
                      {text:"Surname",colSize:2},
                      {text:"Country",colSize:1},
                      {text:"First Contact",colSize:2},
                      {text:"Email",colSize:3},
                      {text:"Sold",colSize:1},
                      {text:"Owner",colSize:2}],
            searchWord:"",
            showComponent: false,
            currentClientInfo:'',
            selectedOption: "name"
        }
    }
    filterClientsInfo = (clients) => {
    var filterValue = this.state.selectedOption; //don't need convert toLowerCase bcz it'd done in generateOptions function
    if (filterValue==="sold")
    return this.filterBySold(clients,filterValue)
    else return clients.filter(clientData => clientData[filterValue].toLowerCase().includes(this.state.searchWord));
      }

    filterBySold (clients,filterValue){
    let newar=[];
    if (this.state.searchWord==="yes"){
        newar = clients.filter(clientData => {
        if (clientData[filterValue]===true)
        return clientData 
        })
    }
    else if(this.state.searchWord==="no"){
        newar = clients.filter(clientData => {
        if (!clientData[filterValue])
        return clientData 
    })
    }
    return (newar.length) ? newar :  clients
    }
    

    generateRowsInfo(){
        const clientInfo= this.filterClientsInfo(this.props.clients);
        return clientInfo.map((item, i) => {
            return (<Client 
                info={item}
                key={i} 
                getClientInfo={this.getClientInfo}
              />)   //the power of JSX!
        })  
    }
    getClientInfo =(info) => {
        console.log("currentClientID ",info);
            this.setState({
              showComponent: true,
              currentClientInfo: info 
          })
      }
      closeClientInfo =() => {
            this.setState({
              showComponent: false,
              currentClientInfo: '' 
          })
      }
      updateSelectedOption = (e) => {
        console.log("selected value",e.target.value);
        this.setState({selectedOption: e.target.value})
      }
    generateOptions(){
        return this.state.topNames.map((item, i) => {
            // console.log("item",item);
            if (item.text!=="Surname") {
            let optionValue = (item.text!=="First Contact")? item.text.toLowerCase(): "firstContact";//item.text.split(' ').join('');
                return (<option 
                value={optionValue}
                key={i}>{item.text}
               </option>)   //the power of JSX!
            }    
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
            this.setState({searchWord: e.target.value.toLowerCase()})
          }
         
    render() {
        console.log("searchWord",this.state.searchWord);
        return (
            <div className="table-body">

             {this.state.showComponent ?
            <ClientInfo info={this.state.currentClientInfo} updateClientDetails={this.props.updateClientDetails} closeBox={this.closeClientInfo}/>
            : null
            }
                 <span className="float-left ml-3 mt-2 mb-2">
                 <input type="text" id="search" className="" onChange={this.updateSearchText} value= {this.state.searchWord} placeholder="Search.." /></span>
                 <div className="float-left ml-3 mt-2 mb-2">
                    <select onChange={this.updateSelectedOption} value={this.state.selectedOption}>
                    {this.generateOptions()}
                    </select> 
                 <span className="ml-2">{this.state.selectedOption==="sold"? "*for search write 'yes' or 'no'": null }</span>
                </div>
                <div className="row row-main rounded">
                {this.generateTopRow()}
                </div> 
                <span>{this.generateRowsInfo()}</span>
            </div>
        )
    }
}
export default Clients;
