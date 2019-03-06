const Bar = require('./barModel');

const barController = {};

barController.getAllBars = (req, res, next) => {
    const query = Bar.find();
    query.exec((err, doc) => {
        console.log(doc);
        res.locals = doc;
        next();
    })
}

barController.createBar = (req, res, next) => {
    const bar = new Bar({name: 'Bounty HMS', location: 'Koreatown'});
    bar.save();
}

module.exports = barController;