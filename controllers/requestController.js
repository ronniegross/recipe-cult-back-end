const express = require('express');
const requestService = require('../services/requestService');
const clients = require('../data/clientData');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('I am alive!');
});

router.get('/get-clients', (req, res) => {
    res.send(clients);
});

router.post('/post-data', (req, res) => {
    const payload = requestService.createInputResponse(req.body);
    res.send(payload);
});

module.exports = router;