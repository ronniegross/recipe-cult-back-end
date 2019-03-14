const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('I am alive!');
});

app.post('/post-data', (req, res) => {
    let input1 = req.body.input1
    let input2 = req.body.input2
    let payload = {
        message: "Received these inputs",
        input1,
        input2,
    }
    res.send(payload);
})

app.listen(port, () => console.log(`Starter app listening on port ${port}!`));