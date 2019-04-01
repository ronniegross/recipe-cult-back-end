const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('I am alive!');
});

router.get('/get-clients', (req, res) => {
    const clients = [{
       name: 'Facebook', 
       email: "markzuck@gmail.com", 
       phoneNumber: "123-234-3456", 
       projectStatus: "Planning"
    },
    {
        name: 'Google', 
        email: "google@gmail.com", 
        phoneNumber: "845-153-2649", 
        projectStatus: "Complete"
     },
     {
        name: 'Amazon', 
        email: "JeffBezos@gmail.com", 
        phoneNumber: "123-234-3456", 
        projectStatus: "In Progress"
     }
    ]
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