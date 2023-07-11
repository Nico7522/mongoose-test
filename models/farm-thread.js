const mongoose = require('mongoose');

const FarmThreadSchema = new mongoose.Schema({
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
    },
    categorie: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Categorie",
        required: true
    }
});

const FarmThread = mongoose.model('FarmThread', FarmThreadSchema);

module.exports = { FarmThread }