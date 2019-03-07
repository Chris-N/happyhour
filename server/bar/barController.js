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
    const bar = new Bar({name: req.body.name, location: req.body.location});
    bar.save((err, doc) => {
        if(err) throw new Error(`BarController creating new instance error: ${err}`);

        console.log(`Created new bar ${doc}`);
    });
}

module.exports = barController;