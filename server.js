// server.js
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`server started ${port}`);
