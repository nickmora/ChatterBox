const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const passport = require("passport");

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chatter_test');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, (err)=>{
    if (err) console.log(err);
    console.log(`Now listening on PORT ${PORT}, ch-check it out, brah!`)
})