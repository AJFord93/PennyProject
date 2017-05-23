// =================================================================
// Passport Configuration
// =================================================================

//Declaring Dependencies
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var mysql = require('mysql');

//loading our user model
var User = require('../models/users');

//loading our auth properties
var configAuth = require('./auth');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        // User.findById(id, function(err, user) {
        //     done(err, user);
        // });
    });

    // code for login (use('local-login', new LocalStategy))
    // code for signup (use('local-signup', new LocalStategy))

// =================================================================
// Facebook Strategies
// =================================================================

    passport.use(new FacebookStrategy({

            // pull in our app id and secret from our auth.js file
            clientID        : configAuth.facebookAuth.clientID,
            clientSecret    : configAuth.facebookAuth.clientSecret,
            callbackURL     : configAuth.facebookAuth.callbackURL

        },

        // facebook will send back the token and profile
        function(token, refreshToken, profile, done) {

            // asynchronous function in node.js
            process.nextTick(function () {

                console.log(profile);
                return done(null, profile);

            });

        }));

}; //end of module.exports
