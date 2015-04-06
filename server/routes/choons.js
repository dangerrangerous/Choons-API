var express = require('express');
var router = express.Router();
// import choons model
var Choon = require('../models/choon');

/* GET all users */
router.get('/', function(req, res) {
  // res.json({ message: 'Hola, the API is working'});
  Choon.find(function(err, choons) {
    if (err)
    res.send(err);
    res.json(speakers);
  });

});

/* GET specific choon by id */
router.get('/:choon_id', function (req, res) {

  Choon.findById(req.params.choon_id, function(err, choon) {
    if (err)
      res.send(err);
      res.json(choon);
  });
});

/* PUT choons */
router.post('/', function(req,res) {
  // create a new instance of the Choon model
  var choon = new Choon();

  // set the choons properties (comes from the req)
  choon.name = req.body.name;
  choon.label = req.body.label;
  choon.artist = req.body.artist;
  choon.description = req.body.description;
  choon.posted = req.body.posted;

  // save the data received
  choon.save(function(err) {
    if (err)
      res.send(err);

      // else give great success
      res.json({ message: 'choon saved, great success!'});
  });

});

/* UPDATE specific choons by id */
router.put('/:choon_id', function(req, res) {

  Choon.findById(req.params.choon_id, function(err, choon) {
    if (err)
      res.send(err);
      // update the choon properties
      choon.name = req.body.name;
      choon.label = req.body.label;
      choon.artist = req.body.artist;
      choon.description = req.body.description;
      choon.posted = req.body.posted;

      // save the data received
      choon.save(function(err) {
        if (err)
          res.send(err);

          // else give great success
          res.json({ message: 'choon saved, great success!'});
        });
    });
});

/* Delete specific choon by id */
router.delete('/:choon_id', function(req,res) {

Choon.remove({
  _id: req.params.choon_id }, function(err, choon) {
    if(err)
      res.send(err);

      // else give great success
      res.json({ message: 'choon deleted, great success!'});

  });
});
module.exports = router;
