const db = require('../models');
const passport = require('passport');




module.exports = function(app, passport){

  app.get('/', function(req, res){
    res.render('index', {title: "A Penny For Your Thoughts", layout: 'index'});
  });

  app.get('/app', function(req, res){
    res.render('app', {});
  });

// =====================================
// FACEBOOK ROUTES =====================
// =====================================

// route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/app',
            failureRedirect : '/'
        }));

    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
};
