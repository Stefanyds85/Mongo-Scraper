// Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require ("cheerio");
var request = require ("request")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3006;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Checking the connection
app.listen(PORT,function(){
    console.log("connected" + PORT);
});