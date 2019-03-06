const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barSchema = new Schema({
    name: {type: String},
    location: {type: String},
    // created_at: { type: String, default: Date.now }
});

module.exports = mongoose.model('Bar', barSchema);