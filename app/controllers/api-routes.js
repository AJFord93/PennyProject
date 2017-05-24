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
                res.json();
            });
        });
    });

};
