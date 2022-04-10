const mongoose = require("mongoose");

const issuesSchema = new mongoose.Schema({
    rent: Number, 
    tid: Number,
});

module.exports = mongoose.model('Issues', issuesSchema);