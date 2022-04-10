const mongoose = require('mongoose');
const db = require('./models');
// db.titles.find({title:{$regex: 'bug',$options:'i'}}).forEach(r=>print(JSON.stringify(r))) 

(
    async function () {
        try {
            const result = await db.Titles.find();
            console.log(result);
            process.exit();
        } catch (e) { console.log(e.message) }
    }
)();
// db.Titles.find()
//     .then(titles => console.log(JSON.stringify(titles, null, '\t')));`