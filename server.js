'use strict';

const express = require('express');
const server = express();

const PORT = 9933;

server.use(express.static('public'));

server.listen(PORT, function () {
    console.log('Listening on port', PORT)
});