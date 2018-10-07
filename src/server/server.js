var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const SERVER_PORT = 5000;
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
//----------------------------
mongoose.connect('mongodb://localhost/crmDB', function() {
  console.log("DB connection established!!!");
})
let clientSchema = new mongoose.Schema({
  "name": String,
  "email": String,
  "firstContact": Date,
  "emailType": String,
  "sold": Boolean,
  "owner": String,
  "country": String
});
let myJson = require('../components/data.json'); 
  // console.log('JSON',myJson);

let Client = mongoose.model('Client', clientSchema);
//PUSH FROM JSON FILE TO MONGODB
for(let item=0; item<myJson.length;item++)
{
  console.log(myJson[item]);
  let client=new Client(myJson[item]);
  client.save();
}


app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/popUldateDatabase', function (req, res) {
    res.send('This will populate the database once, using some kind of for and insert to each line');
});
app.get('/getData', function (req, res) {
    // res.json(fakeDb);
  Client.find(function (error, result){
  if(error) { return console.error(error); }
  console.log (result);
  res.json(result);
});
    
});

app.listen(SERVER_PORT, function () {
    console.log('Example app listening on port 5000!');
});