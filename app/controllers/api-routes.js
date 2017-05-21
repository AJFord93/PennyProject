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
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            dob: req.body.dob
        }).then(function() {
            res.redirect("/");
        });
    });

};
