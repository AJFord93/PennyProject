const db = require('../models');

const express = require('express');
const router = express.Router();





module.exports = (app) => {

    //Get route for getting all of the Users
    app.get("/index", function(req, res) {
        db.User.findAll({})
            .then(function(data) {
                //console.log(data);
                const hbsObject = {
                    foobar: data
                };
                //console.log(hbsObject);
                res.render("index", hbsObject);
            });
    });

    //POST route for saving a new User and creating the Profile
    app.post("/index", function(req, res) {
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(function(newUser) {
            console.log(newUser);
            db.Profile.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                UserId: newUser.id
            }).then(function() {
                res.redirect("/app");
            });
        });
    });


    //Post request is called with AJAX in choices.js
    //Post route to save a selected category to the database
    // app.post('/app', function(req, res) {
    //   console.log(req.body);
    //   db.Category.create({
    //     type: req.body.category //,
    //     //QuestionId:
    //   }).then(function() {
    //     res.redirect('/app');
    //   }).catch(err => console.log(err.message));
    // });

    router.post('/app', function(req, res) {
  	let question = req.body.question;
  	let category = req.body.category;
    let user = req.user;

    console.log(user);
    console.log(category);
    console.log(question);

  	question.build({
  		question : question,
  		categoryId : category,
      user: userId
     }).save().then(function(result) {
  		return res.redirect('/');
  	}).catch(function(error) {
  		return res.render('error', {
  	  		message: error.message,
  	  		error: error
  		});
  	});
  });


    // // Post route to create a question and save it to the database
    // app.post('/app', function(req, res) {
    // // Create a question and access the form with req.body
    //   // console.log(req.body);
    //   db.Question.create({
    //     question: req.body.question //,
    //     //CategoryId: ,
    //     //UserId:
    //   }).then(function() {
    //     res.redirect('/app');
    //   }).catch(err => console.log(err.message));
    // });


    // Post route to create an answer and save it to the database
    app.post('/app', function(req, res) {
      // Create an answer and access the form with req.body
        // console.log(req.body);
        db.Answer.create({
          answer: req.body.answer //,
          //QuestionId: ,
          //UserId:
        }).then(function() {
          res.redirect('/app');
        }).catch(err => console.log(err.message));
      });


};
