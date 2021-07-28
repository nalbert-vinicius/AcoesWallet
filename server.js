const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/authApp'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/authApp/index.html');
});

app.listen(PORT, () => {
    console.log("SERVIDOR NA PORTA "+ PORT);
})

