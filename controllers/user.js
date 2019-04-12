const db = require("../models"),
    passport = require("../config/passport")

module.exports = {
    createUser: (req, res) =>{
        console.log("hello from User controller")
        console.log(req.body)
        db.User.create(req.body)
        .then(dbUser=>{
            console.log(dbUser)
        })
    },

    loginUser: (req,res) =>{
        console.log(req.body);
        res.json("/user")
    }
}