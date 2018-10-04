var express = require('express');
var app = express();


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


let fakeDb = [
    {
      "_id": "5b9f48a2406b2cd74c55c663",
      "name": "Perkins Cunningham",
      "email": "perkinscunningham@imant.com",
      "firstContact": "2018-11-26T22:00:00.000Z",
      "emailType": "B",
      "sold": true,
      "owner": "Emily Durham",
      "country": "Romania"
    },
    {
      "_id": "5b9f48a25afcc00e1c1ddfbf",
      "name": "Fischer Hammond",
      "email": "fischerhammond@imant.com",
      "firstContact": "2017-05-15T21:00:00.000Z",
      "emailType": null,
      "sold": false,
      "owner": "Janice Alvarado",
      "country": "Turkey"
    }
]
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/popUldateDatabase', function (req, res) {
    res.send('This will populate the database once, using some kind of for and insert to each line');
});
app.get('/getData', function (req, res) {
    res.json(fakeDb);
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});