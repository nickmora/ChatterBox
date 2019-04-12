const router = require("express").Router(),
    userController = require("../controllers/user");
    passport = require("../config/passport")

router.route("/")
    .post(userController.createUser)

router.route("/login")
    .post(passport.authenticate("local", {failureRedirect: "/login"}), userController.loginUser)

module.exports = router;