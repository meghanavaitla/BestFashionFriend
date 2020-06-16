const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors =require('cors');
var blouse = require('./backend/models/blouses');
var bottoms = require('./backend/models/bottomwear');
var womenaccessories = require('./backend/models/womenaccessories');
var traditionalwear = require('./backend/models/traditionalwear');


// ************************ DB Connection ************************

var dbOptions = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true};

mongoose.connect("mongodb+srv://Meghana_07:vnrvjiet@cluster0-lahh1.mongodb.net/Fashion?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function(){

    console.log("Connected to DB");

})

mongoose.connection.on('error', function(err){

    console.log("Error while connecting to DB: " + err);

})

// ************************ DB Connection ************************



const app = express()
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json

app.use(bodyParser.json())
app.use(cors());











// ****** Body Parser *******
app.get('/api/blouse', (req, res) => {
    blouse.find({},null, {
      limit: 20
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/blouse: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  });
  app.get('/api/bottoms', (req, res) => {
    bottoms.find({}, null, {
      limit: 20
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/bottomwear: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });

  });
    app.get('/api/womenaccessories', (req, res) => {
    womenaccessories.find({}, null, {
      limit: 20
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/womenaccessories: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  });
  app.get('/api/traditionalwear', (req, res) => {
    traditionalwear.find({}, null, {
      limit: 20
    }, (err, docs) => {
      if (err) {
        console.log('Error while getting movies from DB in /api/traditionalwear: ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  });


// ****** Body Parser ********





// *********************** Backend Routes **********************

app.get('/', (req, res) => res.send('Hello World!'))


// *********************** Backend Routes **********************









// ******************** Express Server *************************

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


