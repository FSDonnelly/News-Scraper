require("dotenv").config();
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


var PORT = process.env.PORT || 3000;

var MONGODB_URI = process.env.MONGODB_URI ||  "mongodb://localhost/mongoHeadlines";

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI  ||  "mongodb://localhost/mongoHeadlines", {
 useNewUrlParser: true
});

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

