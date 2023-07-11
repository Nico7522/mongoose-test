const mongoose = require('mongoose');

const ThreadsSchema = new mongoose.Schema({
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

const Threads = mongoose.model('threads', ThreadsSchema);

module.exports = { Threads }