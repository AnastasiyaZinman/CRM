import React, { Component } from 'react';
import './actions.css';
import AddClient from "./AddClient.js"
class Actions extends Component {
    constructor() {
        super();
        this.state = {
            // clientsNames : [],
            // ownersNames : []
        }
    }
    generateOptionsSet(property){
        console.log("this.props.clients",this.props.clients);
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
        console.log("data",data);
        return data.map((item,i) =>{
            return (<option 
            value={item}
            key={i}>{item}
            </option>)
            })
    }

    render() {
    return (
        <div className="action-box">
         <h3>UPDATE</h3>
         <div className="col">Client:  
         <select className="ml-3">
             {this.generateOptionsSet("name")}
        </select>
         </div>
         
        <div className="row action-box">
            <div className="col-md-2  ">
             Transfer owndership to
             </div>
             <div className=" col-md-2">
             <select>
             {this.generateOptionsSet("owner")}
            </select>
            </div>
            <div className="  col-md-1">
            <button type="button" class="btn update-btns btn-outline-warning">transfer</button>
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2">Send email:</div>
             <div className="col-md-2">
             <select>
             {this.generateOptionsSet("emailType")}
            </select>
             </div>
             <div className="col-md-1">
             <button type="button" class="btn update-btns btn-outline-warning">send</button>
             </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">declare sale!</div>
             <div className="col-md-2">
             </div>
             <div className="col-md-1">
             <button type="button" class="btn update-btns btn-outline-warning">Declare</button>
             </div>
     </div>

        <hr/>
        <AddClient clients={this.props.clients}/>
        </div>
   )}
}
export default Actions;