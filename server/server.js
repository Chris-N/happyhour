const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const mongoose = require('mongoose');
const PORT_DB = 27017
mongoose.connect(`mongodb://localhost:${PORT_DB}/happyhour`, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Mongo DB is now connected on ${PORT_DB}`));

const barController = require('./bar/barController');

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'production'){
    app.use('/build', express.static(path.join(__dirname, '../build')));
    app.get('/', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/../client/index.html'));
    });
}

app.get('/bars',barController.getAllBars, (req, res, next) => {
    console.log(res.locals);
    res.json(res.locals);
})

app.listen(PORT, () => console.log(`Server is now listening on ${PORT}`));

module.exports = app;