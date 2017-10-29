var connect = require('connect'); 
var server = connect().
use(function(req, res) { 
    res.end('Hallo Alex'); 
}). 
listen(64084); 
console.log("Server has started and is listening to http://localhost:64084");
