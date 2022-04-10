const mongoose = require("mongoose");

(async()=>{
    await mongoose.connect('mongodb://localhost:27017/midterm');
})();

module.exports = {
    Issues: require("./issue"),
    Titles: require("./title"),
}