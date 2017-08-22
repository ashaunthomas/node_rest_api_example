var express = require('express');

var app = express();

var port = process.env.port || 3000; 

var bookRouter = express.Router(); //router instance to define routes

bookRouter.route('Books')
    .get(function(req, res) {
        var responseJson = {hello: "This is my API"};
        res.json(responseJson);
    });

app.use('/api', bookRouter);


app.get('/', function(req, res) {
    res.send("Welcome to my API");
});

app.listen(port, function() {
    console.log("Gulp is running on port: " + port);
});

