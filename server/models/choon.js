var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChoonSchema = new Schema({
  name:         { type: String, Default:''},
  label:        { type: String, Default:''},
  artist:        { type: String, Default:''},
  description:  { type: String, Default:''},
  posted:       { type: Date, Default: Date.now}
});

module.exports = mongoose.model('Choon', ChoonSchema);
