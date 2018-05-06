const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());
server.use(express.static('client/public'));

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db('bucket_list');
  const bucketListCountries = db.collection('countries');

  server.get('/db/countries', function(req, res) {
    bucketListCountries.find().toArray(function(err, allBucketListCountries) {
      if (err) {
        console.error(err);
        res.status(500);
        res.send();
        return;
      }
      res.json(allBucketListCountries);
    });
  });

  server.post('/db/countries', function (req, res) {
    const newBucketListCountry = req.body;

    bucketListCountries.save(newBucketListCountry, function (err, result) {
      if (err) {
        console.error(err);
        res.status(500);
        res.send();
      }
      res.status(201);
      res.json(result.ops[0]);
    });

  });

  server.listen(3000, function() {
    console.log('Listening on port 3000');
  });
});
