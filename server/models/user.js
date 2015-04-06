var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  local: {
    email: String,
    password: String,
  }
});

// generating a hash (no not that kind)
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// validating password
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
};

// create the model for users and export to app
module.exports = mongoose.model('User', userSchema);
