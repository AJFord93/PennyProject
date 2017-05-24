const db = require('../models');



module.exports = function(app){

  app.get('/', function(req, res){
    res.render('index', {title: "A Penny For Your Thoughts", layout: 'index'});
  });

  app.get('/app', function(req, res){
    res.render('app', {});
  });

  app.get('/question', function(req, res){
    res.render('question', {});
  });

  app.get('/answer', function(req, res){
    res.render('answer', {});
  });



};
