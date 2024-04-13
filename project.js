//npm install express
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('kindly visit our delivery site!');
});

app.get('/track/:id', (req, res) => {
    const orderId = req.params.id;
    res.send(`order tracking with ID ${orderId}`);
});

app.use((req, res, next) => {
    res.status(404).send("Sory, page not found!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something went wrong!');
});

app.listen(3001, () => {
    console.log('servet started on port 3001');
});
