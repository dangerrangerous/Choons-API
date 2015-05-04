var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

// extract FIRST error message as to not overwhelm users with error
// messages so they can focus on one at a time
var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
      }  else {
        return 'Uknown (possibly) server error. Sorry, Good luck mate';
      }
};
