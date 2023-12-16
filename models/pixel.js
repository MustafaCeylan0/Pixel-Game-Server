const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PixelSchema = new Schema({
    x: Number,
    y: Number,
    value: String
});

module.exports = mongoose.model('Pixel', PixelSchema);