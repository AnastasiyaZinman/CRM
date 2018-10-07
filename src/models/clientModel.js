var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//design the two schema below and use sub docs 
//to define the relationship between posts and comments

let clientSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "firstContact": Date,
    "emailType": String,
    "sold": Boolean,
    "owner": String,
    "country": String
});


let Client = mongoose.model('Client', clientSchema)
module.exports = { Client } 
