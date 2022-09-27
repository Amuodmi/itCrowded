
// this is a function to check and see if a session is logged in, and if not, redirects client to the login page

const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;