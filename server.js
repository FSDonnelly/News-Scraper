<<<<<<< HEAD
// require("dotenv").config();
=======
require("dotenv").config();
>>>>>>> e5b51bbc497828596bd9a6b131d47994c2ac0fa0
var express = require("express");
var logger = require("morgan");
const mongoose = require("mongoose");



var PORT = process.env.PORT || 3000;

<<<<<<< HEAD
// var MONGODB_URI = process.env.MONGODB_URI ||  "mongodb://localhost:27017/mongooseHeadlines";
=======
var MONGODB_URI = process.env.MONGODB_URI ||  "mongodb://localhost/mongoHeadlines";
>>>>>>> e5b51bbc497828596bd9a6b131d47994c2ac0fa0

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.Promise = Promise;
<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/mongooseHeadlines', {useNewUrlParser: true});
=======
mongoose.connect(MONGODB_URI  ||  "mongodb://localhost/mongoHeadlines", {
 useNewUrlParser: true
});
>>>>>>> e5b51bbc497828596bd9a6b131d47994c2ac0fa0

// db.Headline.create();
// db.Note.create();

require("./routes/index.js")(app)

// additional libraries
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

