const mongoose = require("mongoose");

const titleSchema = new mongoose.Schema({
    image: String,
    episode: String,
    title: String,
    type: String,
    date: String,
    rent: Number,
    tid: Number,
});

module.exports = mongoose.model('Titles', titleSchema);