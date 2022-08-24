// server.js
const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(history());
app.use('/', serveStatic(`${__dirname}, /dist`, '/public'));
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`server started ${port}`);
