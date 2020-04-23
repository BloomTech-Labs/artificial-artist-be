const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = server;