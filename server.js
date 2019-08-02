const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get("/css", function(request, response) {
  response.sendFile(__dirname + "/index.css");
});

const listener = app.listen(process.env.PORT || 6000, function() {});