const express = require("express"),
    logger = require("morgan"),
    passport = require("passport"),
    db = require("./models"),
    PORT = process.env.PORT || 1234,
    app = express ();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

db.sequelize.sync().then(()=>{
    app.listen(PORT, (err)=>{
        if (err) console.log(err);
        console.log(`Now listening on PORT ${PORT}, ch-check it out, brah!`)
    })
});