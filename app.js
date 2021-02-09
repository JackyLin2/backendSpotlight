require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

mongoose.connect("mongodb:localhost2017/spotlightDB", {useNewUrlParser: true})

app.use(express.static("public"))
app.set('view engine', "ejs")
app.use(bodyParser.urlencoded({ extended: true}))

var UserSchema = new mongoose.Schema({
    name:String,
    password: String,
    title: String,
    post:String,
})

const User = mongoose.model("User", UserSchema)

const user = new User({})

user.save()


app.get("/register", function(req, res){
    res.render("register")
})

app.get("/", function(req, res){
    res.write("<h1> Hello </h1>")
})

app.listen(3000, function(){
    console.log("Listening on 3000")
})