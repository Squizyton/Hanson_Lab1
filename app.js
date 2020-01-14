var express = require("express")

var app = express()

var path = require("path")

//Giving router the express router
var router = express.Router();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+"/Views/html/index.html"));
})

//Setup for first route
app.use('/', router)


app.use(express.static(__dirname+'/Views'))

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});



