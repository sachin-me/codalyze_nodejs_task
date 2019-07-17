const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 4000;

const server = http.createServer();
var linesArr = [];

fs.watchFile('./test.txt', (stats) => {
  fs.readFile('./test.txt', 'utf8', (err, data) => {
  	let newArr = [...linesArr, data][0].split('\n');
    if (newArr.length > 10) newArr = newArr.slice(-10).join('\n');
    console.log(newArr, "getting last 10 lines on server's console");
  });
});


server.listen(port, () => console.log(`server is running on ${port}`))
