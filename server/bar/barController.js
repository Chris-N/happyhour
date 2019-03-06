const Bar = require('./barModel');

const barController = {};

barController.getAllBars = () => {

}

barController.createBar = (req, res, next) => {
    const bar = new Bar({name: 'Bounty HMS', location: 'Koreatown'});
    bar.save();
}

module.exports = barController;