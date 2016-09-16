/* Book Marker Warm Up (18.3.1)
 * backend
 * ==================== */ 

// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');


// configure our app for morgan and body parser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('view engine');
// static file support with public folder
app.use(express.static('public'));

// mongojs configuration
var mongojs = require('mongojs');
var databaseUrl = "classRoster";
var collections = ["students"];

// hook our mongojs config to the db var
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});



// Routes
// ======

// simple index route
app.get('/', function(req, res) {
res.send('index.html', {"root":"public"});
 });

app.get("/currentseating", function(req, res)
{
    res.sendFile("currentseating.html", {"root":"public"});
});


app.get("/randomseating", function(req, res)
{
    res.sendFile("randomseating.html", {"root":"public"});
});

app.get("/ascendingseating", function(req, res)
{
    res.sendFile("ascendingseating.html", {"root":"public"});
});

app.get("/descendingseating", function(req, res)
{
    res.sendFile("descendingseating.html", {"root":"public"});
});

app.get("/randomgroups", function(req, res)
{
    res.sendFile("randomgroups.html", {"root":"public"});
});

app.get("/randomparticipation", function(req, res)
{
    res.sendFile("randomparticipation.html", {"root":"public"});
});

app.get("/randomseatingtest", function(req, res)
{
    res.sendFile("randomseatingtest.html", {"root":"public"});
});


app.get('/roster', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything 
  db.students.find({},function(err, found) {
     console.log(found);//log any errors if the server encounters one
    if (err) {
      console.log(err);
    } 
    // otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});





 app.post('/roster', function(req, res){
  console.log(req.body['updatedRoster']);
        db.students.update ({"_id" : mongojs.ObjectId("57d728e9afd3f12742d5241c")}, {$set: {"name": req.body['updatedRoster[]']}}, function(err, docs){
            if (err) throw err
            res.send('success');
        });
    });









// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});