const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barSchema = mongoose.Schema({
    name: {type: String},
    location: {type: String},
    // created_at: { type: String, default: Date.now }
});

module.export = mongoose.model('bar', barSchema);