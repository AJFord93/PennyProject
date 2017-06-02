'use strict';

// =================================================================
// Passport Configuration
// ==========================================================

//Declaring Dependencies
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var db = require('../models');


//loading our auth properties
var configAuth = require('./auth');

module.exports = function(app,Profile) {

// =================================================================
// Local Strategies
// =================================================================

    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                return done(null, user);
            });
        }
    ));



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

                db.User.findOrCreate({where:{

                    fbID: profile.id,
                    email: profile.emails[0].value,
                    username: profile.id,
                    password: profile.id


                }}).spread(function(user){


                    db.Profile.findOrCreate({where:{


                        first_name: profile.name.givenName,
                        last_name: profile.name.familyName,
                        imageURL: profile.photos[0].value,
                        UserId: user.id

                    }
                    }).spread(function(user){

                        return done(null, user);
                    });
                });

            });//end of asynch

        }));

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        db.Profile.find({
            where:{
                UserId: id
            }
        }).then(function(user){
            if (!user) return done(new Error('Invalid user'));
            return done(null,user);
        })
    });

}; //end of module.exports
