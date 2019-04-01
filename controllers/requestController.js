const express = require('express');
const clients = require('../data/clients');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('I am alive!');
});

router.get('/get-clients', (req, res) => {
    console.log(`responding with data for clients ${clients[0].name}, ${clients[1].name}, and ${clients[2].name}`)
    res.send(clients);
});

router.post('/post-data', (req, res) => {
    let input1 = req.body.input1
    let input2 = req.body.input2
    let input3 = req.body.input3
    let payload = {
        message: "Received these inputs",
        input1,
        input2,
        input3
    }
    console.log(`responding with: ${payload.message}, ${payload.input1}, ${payload.input2}, ${payload.input3}`
    );
    res.send(payload);
});

module.exports = router;