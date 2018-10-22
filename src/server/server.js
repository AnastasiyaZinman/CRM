var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
let moment = require('moment')
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
mongoose.connect('mongodb://localhost/crmDB', function () {
  console.log("DB connection established!!!");
})
// let myJson = require('../components/data.json'); 
// console.log('JSON',myJson);

//PUSH FROM JSON FILE TO MONGODB
// for(let item=0; item<myJson.length;item++)
// {
//   console.log(myJson[item]);
//   let client=new Client(myJson[item]);
//   client.save();
// }


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getData', function (req, res) {
  // res.json(fakeDb);
  Client.find(function (error, result) {
    if (error) { return console.error(error); }
    //   console.log (result);
    res.json(result);
  });
});
// app.get('/getClientInfo', function (req, res) {
//     res.send('This will populate each row which we are looking for');
// });
app.get('/getDataForBadges', async function (req, res) {
  let newResult = await getNewClients();
  let newResult2 = await getEmailsSent();
  let newResult3 = await getOutstandingClients();
  let newResult4 = await getHottestCountry();
  res.json(newResult, newResult2, newResult3, newResult4);
  console.log(newResult, newResult2, newResult3, newResult4);
});

//----------------------Add to a new File-----------------------
// async function getDataForBudgets() {
//  return getNewClients();
//   // let count=getNewClients();
//   // return ({"count":5 });

//   // let newClientsCount = getNewClients();
//   //   emailsSent = getEmailsSent(),
//   //   outstandingClients = getOutstandingClients(),
//   //   hottestCountry = getHottestCountry();
//   // return ({
//   //   newClients: newClientsCount
//   //   emailsSent: emailsSent,
//   //   outstandingClients: outstandingClients,
//   //   hottestCountry: hottestCountry
//   // })
// }
function getNewClients() {
  const year = moment().year();
  const month = moment().month();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  return Client
    .countDocuments({ "firstContact": { "$gte": firstDay, "$lte": lastDay } })
  .then(count => { return count })
  .catch(err => { throw err });
}
function getEmailsSent() {
  return Client
    .countDocuments({ 'emailType': { '$exists': true, '$ne': null } })
  // .then(count => { return (json(count)) })
  // .catch(err => { throw err });
}
function getOutstandingClients() {
  return Client
    .countDocuments({ 'sold': { '$exists': true, '$eq': false } })
  // .then(count => { return (json(count)) })
  // .catch(err => { throw err });
}

function getHottestCountry() {
  return Client
    .aggregate([
      { $match: { sold: { '$eq': true } } },
      { $group: { _id: "$country", count: { $sum: 1 } } }
    ])
  .then(data => {
      const max = data.sort((a, b) => a.count < b.count)[0]._id;
      return max;
  })
  .catch(err => { throw err });
}
//------------------------
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const api = require('../routes/api')
app.use('/', api)
//---------------------------------
app.listen(SERVER_PORT, function () {
  console.log('Example app listening on port 5000!');
});