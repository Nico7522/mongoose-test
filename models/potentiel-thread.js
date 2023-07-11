const mongoose = require('mongoose');

const PotentielThreadSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const PotentielThread = mongoose.model('PotentielThread', PotentielThreadSchema);


module.exports = { PotentielThread }