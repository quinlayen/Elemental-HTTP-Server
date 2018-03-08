const http = require('http');
const fs = require('fs');
var url = require('url');
const query = require('querystring');

const server = http
  .createServer((req, res) => {
    const reqData = req.url;
    console.log(reqData);
    switch (reqData) {
      case '/':
        fs.readFile('public/index.html', (err, html) => {
          if (err) {
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.write('Your page is not found');
            res.end();
          } else {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(html);
            res.end();
          }
        });
        break;
      case '/css/styles.css':
        fs.readFile('public/css/styles.css', (err, css) => {
          if (err) {
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.write('Your page is not found');
            res.end();
          } else {
            res.writeHead(200, { 'Content-type': 'text/css' });
            res.write(css);
            res.end();
          }
        });
        break;
      case '/favicon.ico':
        res.end();
        break;
      case '/hydrogen.html':
        fs.readFile('public/hydrogen.html', (err, html) => {
          if (err) {
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.write('Your page is not found');
            res.end();
          } else {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(html);
            res.end;
          }
        });
        break;
      case '/helium.html':
        fs.readFile('public/helium.html', (err, html) => {
          if (err) {
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.write('Your page is not found');
            res.end();
          } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(html);
            res.end();
          }
        });
        break;
    
    } //end of switch
  })
  .listen(8080);
