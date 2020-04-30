const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const helmet = require("helmet");

const server = express();
const apiRouter = require('./api_router');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', apiRouter);

server.get('/token', (req, res) => {
    const payload = {
        subject: 'user',
        userid: 'artist'
    };

    const secret = 'artificialartist';

    const options = {
        expiresIn: '12hours'
    };

    const token = jwt.sign(payload, secret, options);

    res.json(token);
});

module.exports = server;