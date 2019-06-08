//
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated"),
    userController = require("../controllers/user")
//
module.exports = function(app) {
//
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.redirect("/signUp");
  });
//
  app.post("/api/newUser", userController.createUser)

//
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/home");
    // }
    const userInfo = {
        username: req.user.email
    }
    res.send(userInfo);
  });
//
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    res.redirect("/home");
  });
  app.get("/api/user")
};