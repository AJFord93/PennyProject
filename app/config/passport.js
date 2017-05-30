'use strict';

// =================================================================
// Passport Configuration
// ==========================================================

//Declaring Dependencies
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var db = require('../models');


//loading our auth properties
var configAuth = require('./auth');

module.exports = function(app,Profile) {

// =================================================================
// Facebook Strategies
// =================================================================

    passport.use(new FacebookStrategy({

            // pull in our app id and secret from our auth.js file
            clientID        : configAuth.facebookAuth.clientID,
            clientSecret    : configAuth.facebookAuth.clientSecret,
            callbackURL     : configAuth.facebookAuth.callbackURL,
            profileFields   : ['id', 'displayName', 'photos', 'email', 'first_name', 'gender', 'last_name']

        },

        // facebook will send back the token and profile
        function(token, refreshToken, profile, done) {

            // asynchronous function in node.js
            process.nextTick(function () {
                db.Profile.findOrCreate({where:{

                    email: profile.emails[0].value,
                    first_name: profile.givenName,
                    last_name: profile.familyName,
                    imageURL: profile.photos[0].value,
                    fbID: profile.id
                }
                }).spread(function(user){
                    //console.log(profile);
                    return done(null, user);
                });

            });

        }));

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        db.Profile.find({
            where:{
                fbID: id
            }
        }).then(function(user){
            if (!user) return done(new Error('Invalid user'));
            return done(null,user);
        })
    });

}; //end of module.exports
