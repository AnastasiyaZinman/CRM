var express = require('express');
var app = express();


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


let fakeDb =[
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
    },
    {
      "_id": "5b9f48a2717f46c7647d2792",
      "name": "Gonzalez Armstrong",
      "email": "gonzalezarmstrong@imant.com",
      "firstContact": "2018-04-05T21:00:00.000Z",
      "emailType": null,
      "sold": false,
      "owner": "Leila Howe",
      "country": "France"
    },
    {
      "_id": "5b9f48a2fbb66b93bce1c091",
      "name": "Melva Ingram",
      "email": "melvaingram@imant.com",
      "firstContact": "2018-09-23T21:00:00.000Z",
      "emailType": "B",
      "sold": true,
      "owner": "Hull Conrad",
      "country": "Greece"
    },
    {
      "_id": "5b9f48a27655150701388c9e",
      "name": "Stacy Morton",
      "email": "stacymorton@imant.com",
      "firstContact": "2018-12-08T22:00:00.000Z",
      "emailType": "A",
      "sold": true,
      "owner": "Janice Alvarado",
      "country": "France"
    },
    {
      "_id": "5b9f48a208b3f56db058d33c",
      "name": "Mccormick Klein",
      "email": "mccormickklein@imant.com",
      "firstContact": "2017-06-03T21:00:00.000Z",
      "emailType": "D",
      "sold": true,
      "owner": "Martin Massey",
      "country": "Romania"
    },
    {
      "_id": "5b9f48a2432e2204c27f87c7",
      "name": "Lula Jefferson",
      "email": "lulajefferson@imant.com",
      "firstContact": "2016-12-28T22:00:00.000Z",
      "emailType": "B",
      "sold": true,
      "owner": "Hull Conrad",
      "country": "Croatia"
    },
    {
      "_id": "5b9f48a2c4c6cedc28343820",
      "name": "Bryant Russo",
      "email": "bryantrusso@imant.com",
      "firstContact": "2018-06-03T21:00:00.000Z",
      "emailType": "A",
      "sold": true,
      "owner": "Janice Alvarado",
      "country": "Romania"
    },
    {
      "_id": "5b9f48a2c3730f0e42acc02d",
      "name": "Russell Montoya",
      "email": "russellmontoya@imant.com",
      "firstContact": "2018-06-14T21:00:00.000Z",
      "emailType": "D",
      "sold": true,
      "owner": "Janice Alvarado",
      "country": "Turkey"
    },
    {
      "_id": "5b9f48a2af33eaca987028da",
      "name": "Beach Logan",
      "email": "beachlogan@imant.com",
      "firstContact": "2018-03-27T21:00:00.000Z",
      "emailType": "B",
      "sold": true,
      "owner": "Leila Howe",
      "country": "France"
    },
    {
      "_id": "5b9f48a224855e33619173fb",
      "name": "Golden Fields",
      "email": "goldenfields@imant.com",
      "firstContact": "2017-04-07T21:00:00.000Z",
      "emailType": null,
      "sold": false,
      "owner": "Emily Durham",
      "country": "Turkey"
    },
    {
      "_id": "5b9f48a2f3f6da2eb27f8c46",
      "name": "Mandy Hawkins",
      "email": "mandyhawkins@imant.com",
      "firstContact": "2016-05-13T21:00:00.000Z",
      "emailType": null,
      "sold": false,
      "owner": "Janice Alvarado",
      "country": "Turkey"
    },
    {
      "_id": "5b9f48a250f219f0aad83200",
      "name": "Ashley Holder",
      "email": "ashleyholder@imant.com",
      "firstContact": "2018-08-22T21:00:00.000Z",
      "emailType": "C",
      "sold": true,
      "owner": "Shepherd Stone",
      "country": "France"
    },
    {
      "_id": "5b9f48a245b82b4b5ff19a34",
      "name": "Miles Schmidt",
      "email": "milesschmidt@imant.com",
      "firstContact": "2018-08-11T21:00:00.000Z",
      "emailType": "A",
      "sold": true,
      "owner": "Martin Massey",
      "country": "France"
    },
    {
      "_id": "5b9f48a2e473047459e8fd90",
      "name": "Marissa Rios",
      "email": "marissarios@imant.com",
      "firstContact": "2018-03-25T21:00:00.000Z",
      "emailType": "B",
      "sold": true,
      "owner": "Emily Durham",
      "country": "France"
    },
    {
      "_id": "5b9f48a28a09594e5b8aec94",
      "name": "Simone Hall",
      "email": "simonehall@imant.com",
      "firstContact": "2018-06-09T21:00:00.000Z",
      "emailType": "A",
      "sold": true,
      "owner": "Barton Ramirez",
      "country": "France"
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