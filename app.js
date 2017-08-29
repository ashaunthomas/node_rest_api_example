var express  = require("express");
var mongoose = require("mongoose");
var path = require("path");
var Book = require('./models/bookModel');
var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();
var db = mongoose.connect('mongodb://localhost:27017/techpdfs', {
    useMongoClient: true
});

app.use('/api',bookRouter);
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.listen(port, function() {
    console.log("Gulp is running on port: " + port);
});

bookRouter.route('/books')
    .get(function(req,res) {
        Book.find(function(err,books) {
            if (err) { console.log(err); }
            else { res.json(books)}
        });
    });
