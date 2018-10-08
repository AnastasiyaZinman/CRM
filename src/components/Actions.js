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
    updateSelectedOwnerOption  = (e) => {
        this.setState({selectedOwner: e.target.value})
      }
      updateSelectedEmailTypeOption = (e) => {
        this.setState({selectedEmailType: e.target.value})
      }
      transfer = () => {
        // alert("transfer",this.state.selectedName," ",this.state.selectedOwner);
        if (this.state.selectedName!=='' && this.state.selectedOwner!=='')
        this.props.actionsChangesTSD(this.state.selectedName,"owner",this.state.selectedOwner);
        else alert("Select options!");
        // this.clearActionsState("owner");
    }
    send = () =>{
        // alert("send",this.state.selectedName," ",this.state.selectedEmailType );
        
      if(this.state.selectedName!=='' && this.state.selectedEmailType!=='Email Type')
      this.props.actionsChangesTSD(this.state.selectedName,"emailType",this.state.selectedEmailType);
      else alert("Select options!");
      //   this.clearActionsState("emailType");

    }
    declare = () =>{
        alert("declare");
     if(this.state.selectedName!=='')
      this.props.actionsChangesTSD(this.state.selectedName,"sold")
      else alert("select client name");
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
            <button type="button" className="btn update-btns btn-outline-warning" onClick={this.transfer}>transfer</button>
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
             <button type="button" className="btn update-btns btn-outline-warning" onClick={this.send}>send</button>
             </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">Declare sale!</div>
             <div className="col-md-2">
             </div>
             <div className="col-md-1">
             <button type="button" className="btn update-btns btn-outline-warning" onClick={this.declare}>Declare</button>
             </div>
     </div>

        <hr/>
        <AddClient clients={this.props.clients} createNewClient={this.props.createNewClient}/>
        </div>
   )}
}
export default Actions;