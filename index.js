const express = require('express');
const server = express();

server.get('/teste', (req, res) => {
    return res.json({hello: ' New World'})
});

server.listen(3333);
