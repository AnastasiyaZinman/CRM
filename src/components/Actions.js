import React, { Component } from 'react';
import './actions.css';
import AddClient from "./AddClient.js"
class Actions extends Component {
    constructor() {
        super();
        this.state = {
            selectedName:'',
            selectedOwner:'',
            selectedEmailType:''
        }
    }
    generateOptionsSet(property){
        // console.log("this.props.clients",this.props.clients);
        let dataArr=[];
        var clientsNames = new Set(dataArr);
        this.props.clients.forEach(element => {
            clientsNames.add(element[property]);
        }); 
        dataArr=[...clientsNames]
        // console.log("clientsNames",clientsNames);
        return this.generateOptions(dataArr);
    }
    generateOptions (data){
        // console.log("data",data);
        return data.map((item,i) =>{
            return (<option 
            value={item}
            key={i}>{item}
            </option>)
            })
    }
    updateSelectedNameOption = (e) => {
        this.setState({selectedName: e.target.value})
      }
    updateSelectedEmailTypeOption  = (e) => {
        this.setState({selectedOwner: e.target.value})
      }
      updateSelectedOwnerOption = (e) => {
        this.setState({selectedEmailType: e.target.value})
      }

    render() {
        console.log("AAAAA",this.state);
    return (
        <div className="action-box">
         <h3>UPDATE</h3>
         <div className="col">Client:  
         <select onChange={this.updateSelectedNameOption} className="ml-3">
             <option value="clientName">Client name</option>
             {this.generateOptionsSet("name")}
        </select>
         </div>
         
        <div className="row action-box">
            <div className="col-md-2  ">
             Transfer owndership to
             </div>
             <div className=" col-md-2">
             <select onChange={this.updateSelectedOwnerOption}>
             <option value="ownerName">Owners</option>   
             {this.generateOptionsSet("owner")}
            </select>
            </div>
            <div className="col-md-1">
            <button type="button" className="btn update-btns btn-outline-warning">transfer</button>
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2">Send email:</div>
             <div className="col-md-2">
             <select onChange={this.updateSelectedEmailTypeOption}>
             <option value="emailType">Email Type</option>   
             {this.generateOptionsSet("emailType")}
            </select>
             </div>
             <div className="col-md-1">
             <button type="button" className="btn update-btns btn-outline-warning">send</button>
             </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">Declare sale!</div>
             <div className="col-md-2">
             </div>
             <div className="col-md-1">
             <button type="button" className="btn update-btns btn-outline-warning">Declare</button>
             </div>
     </div>

        <hr/>
        <AddClient clients={this.props.clients}/>
        </div>
   )}
}
export default Actions;