const db = require('../models');



module.exports = function(app){

  app.get('/', function(req, res){
    res.render('index', {});
  });

  app.get('/app', function(req, res){
    res.render('app', {});
  });


};
