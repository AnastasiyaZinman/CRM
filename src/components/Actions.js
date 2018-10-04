import React, { Component } from 'react';
import './actions.css';
class Actions extends Component {
    constructor() {
        super();
        this.state = {
            clientsNames : [],
            ownersNames : []
        }
    }
    generateClientsNames(){
        console.log("this.props.clients",this.props.clients);
        var clientsNames = new Set();
        this.props.clients.forEach(element => {
            let nameAndId={"name":element['name'],"id":element["_id"]};
            clientsNames.add(nameAndId);
        }); 
        let dataArr = Array.from(clientsNames);
        console.log("clientsNames",dataArr);
        return this.generateOptions(dataArr);
        
    }
    generateOptions (data){
        console.log("data",data);
        return data.map((item,i) =>{
                    return (<option 
                        value={item.id}
                        key={i++}>{item.name}
                       </option>)
            })
    }

    render() {
    return (
        <div className="action-box">
         <h3>UPDATE</h3>
         <div className="col  ">Client:  
         <select>
             {this.generateClientsNames()}
        </select>
         </div>
         
        <div className="row action-box">
            <div className="col-md-3  ">
             Transfer owndership to
             </div>
             <div className=" col-md-1">
            <select />
            </div>
            <div className="  col-md-1">
            <button type="button">transfer</button>
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-3">Send email:</div>
             <div className="col-md-1">
             <select />
             </div>
             <div className="col-md-1">
             <button type="button">send</button>
             </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-3  ">declare sale!</div>
             <div className="col-md-1">
             </div>
             <div className="col-md-1">
             <button type="button">declare</button>
             </div>
     </div>

        <hr/>
        <h3>ADD CLIENT</h3>
        <div className="row action-box">
            <div className="col-md-3  ">
            First name:
             </div>
             <div className="col-md-1">
            <input type="text" />
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-3  ">
            Surname name:
             </div>
             <div className="  col-md-1">
            <input type="text" />
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-3  ">
            Country name:
             </div>
             <div className=" col-md-1">
            <input type="text" />
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-3  ">
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