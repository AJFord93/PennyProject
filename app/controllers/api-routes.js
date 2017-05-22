const db = require('../models');




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

    //POST route for saving a new User
    app.post("/index", function(req, res) {
        //console.log(req.body);
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            res.redirect("/");
        });
    });

    app.post("/index", function(req, res) {
        //console.log(req.body);
        db.Profile.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }).then(function() {
            res.redirect("/");
        });
    });

};
