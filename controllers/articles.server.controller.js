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

exports.create = function(req, res) {
  var article = new Article(req.body);
  article.creator = req.user;

  article.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};

// retrieves list of existing articles using mongoose find() function,
// consider adding a mongoDB query. Also, possibly replace fullName w/ userName
exports.list = function(req, res) {
  Article.find().sort('-created').populate('creator', 'firstName lastName fullName').
  exec(function(err, articles) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(articles);
    }
  });
};
