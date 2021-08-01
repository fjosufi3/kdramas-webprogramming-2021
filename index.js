const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, () => {
    console.log('server has been started on port:', PORT)
});

