
function ensureAuthenticated(req, res, next) {
    if (req.session.accessToken) {
      return next();
    }
    res.redirect('/login');
  }
  
  module.exports = ensureAuthenticated;