const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Mongo DB
const mongoose = require('mongoose');
const PORT_DB = 27017
mongoose.connect(`mongodb://localhost:${PORT_DB}/happyhour`, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Mongo DB is now connected on ${PORT_DB}`));

// PostgreSQL
const db = require( './db');
db.pool.on('connect', (client) => console.log('Postgres is now connected on Elephant SQL'));



const barController = require('./bar/barController');

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'production'){
    app.use('/build', express.static(path.join(__dirname, '../build')));
    app.get('/', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/../client/index.html'));
    });
}

app.get('/bars',barController.getAllBars, (req, res, next) => {
    res.json(res.locals);
})
app.get('/yelp', (req, res, next) => {
    db.pool.query('SELECT * FROM bars', (err, result) => {
        console.log(result.rows);
        res.json(result.rows);
    })
})

app.listen(PORT, () => console.log(`Server is now listening on ${PORT}`));

module.exports = app;