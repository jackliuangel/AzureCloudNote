var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.write('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>Jack Node.js page!</title>'+
' </head>'+ 
' <body>'+
' <p>Hi,  <strong>Good</strong> to be with you all! <br>  May the FORCE be with you</p>'+
' </body>'+
'</html>');
res.end();
});
server.listen(8081);
