const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dealSchema = new Schema({
    hhTo: {type: Date},
    hhFrom: {type: Date},
    deal: {type: String}
});


module.exports = mongoose.model('deal', dealSchema);