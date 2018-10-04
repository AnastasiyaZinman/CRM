import React, { Component } from 'react';
import './actions.css';
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
        console.log("clientsNames",clientsNames);
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
            <button type="button">transfer</button>
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2">Send email:</div>
             <div className="col-md-2">
             <select>
             {this.generateOptionsSet("emailType")}
            </select>
             </div>
             <div className="col-md-1">
             <button type="button">send</button>
             </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">declare sale!</div>
             <div className="col-md-2">
             </div>
             <div className="col-md-1">
             <button type="button">declare</button>
             </div>
     </div>

        <hr/>
        <h3>ADD CLIENT</h3>
        <div className="row action-box">
            <div className="col-md-2  ">
            First name:
             </div>
             <div className="col-md-1">
            <input type="text" />
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Surname name:
             </div>
             <div className="  col-md-1">
            <input type="text" />
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Country name:
             </div>
             <div className=" col-md-1">
            <input type="text" />
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Owner name:
             </div>
             <div className="  col-md-1">
            <input type="text" />
            </div>
            </div>
    
        <button type="button">Add new Client</button>
    </div>

   )}
}
export default Actions;