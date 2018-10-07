var { Client } = require('../models/clientModel');
const express = require('express')
//---------------------------------------
const router = express.Router()
//----------------Post-----
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

// POST Add Client
router.post('/addClient', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log("Add client",req.body);
    var newClient = new Client({
      "name": req.body.name,
      "email": "aaa@gmail.com",
      "firstContact": new Date() ,
      "emailType": '',
      "sold": false,
      "owner": req.body.ownerName,
      "country": req.body.countryName
    });
    newClient.save(
    (err, client) => {
      if (err) throw err
      else {
        res.send(client)
        }
      }
    );
  })
//   router.post('/getClientByID', jsonParser, function (req, res) {
// if (!req.body) return res.sendStatus(400)
//   Post.findById(req.body.id, function(err, result){
//         if (err) throw err;
//         else {
//           res.send({ "client": result})
//           }
//     })
// })

  module.exports = router;