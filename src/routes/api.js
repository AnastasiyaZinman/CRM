var { Client } = require('../models/clientModel');
const express = require('express')
//---------------------------------------
const router = express.Router()
//----------------Post-----
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

// POST Add Client
router.post('/addClient', jsonParser, function (req, res) {
    //Very good practice but also send .res so the user can understand why
    if (!req.body) return res.sendStatus(400)
    var newClient = new Client({
      "name": req.body.name,
      "email": req.body.email,
      "firstContact": new Date() ,
      "emailType": ' ',
      "sold": false,
      "owner": req.body.ownerName,
      "country": req.body.countryName
    });
    //Add callback function + err handling
    //Make the code async so we only get reply if everything is working. if not then err
    newClient.save(
    (err, client) => {
      if (err) throw err;
      else {
        res.send({ "client_id": client._id})
        }
      }
    );
  })
  module.exports = router;