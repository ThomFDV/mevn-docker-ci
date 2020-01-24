const User = require("../models/user");

exports.createUser = (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });
    
    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
}

exports.getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    })
}