const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;

app.use(cors({
    origin: '*',
    withCredentials: false,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
}));

app.use(express.static("."));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client', 'index.html'));
})

app.get('/builder', (req, res) => {
    res.sendFile(path.join(__dirname, './client', 'builder.html'));
})

app.listen(port, () => {
    console.log("listening on port ", port);
})