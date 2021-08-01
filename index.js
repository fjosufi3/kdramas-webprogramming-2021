const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ejs = require('ejs');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

var username = 'faiz';
var password = 'twil-mech-mard';
var hosts = 'iad2-c10-1.mongo.objectrocket.com:54949,iad2-c10-2.mongo.objectrocket.com:54949,iad2-c10-0.mongo.objectrocket.com:54949';
var database = 'kdrama_records';
var options = '?replicaSet=4ab47a3c676949cd8063285864cf0e4a';
var connectionString = 'mongodb://' + username + ':' + password + '@' + hosts + '/' + database + options;
const mongo = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

mongo.connect(err => {
    if (err) {
        console.log("Failed to connect to MongoDB server...");
    }
    console.log("Connected to MongoDB server...");
});

app.get('/', (req, res) => {
    const collection = mongo.db("kdrama_records").collection("dramas");
    collection.find({}).toArray(function(err, dramas) {
        if (err) throw err;
        const popularDramas = dramas.filter(drama => drama.type === 'popular');
        const topDramas = dramas.filter(drama => drama.type === 'top');
        const movies = dramas.filter(drama => drama.type === 'movie');
        res.render('index', {
            popularDramas: popularDramas,
            topDramas: topDramas,
            movies: movies
        })
    });
});

app.listen(PORT, () => {
    console.log('server has been started on port:', PORT)
});

