var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const SERVER_PORT = 5000;
//-------------------------
var { Client } = require('../models/clientModel');
//-------------------------
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
let myJson = require('../components/data.json'); 
  // console.log('JSON',myJson);
  
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

app.get('/getData', function (req, res) {
    // res.json(fakeDb);
  Client.find(function (error, result){
  if(error) { return console.error(error); }
  console.log (result);
  res.json(result);
});
});
app.get('/getClientInfo', function (req, res) {
    res.send('This will populate each row which we are looking for');
});

//------------------------
// app.use(bodyParser.json()); 
// app.use(express.static('public'));
// app.use(express.static('node_modules'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// const api = require('./routes/api')
// app.use('/', api)
//---------------------------------
app.listen(SERVER_PORT, function () {
    console.log('Example app listening on port 5000!');
});