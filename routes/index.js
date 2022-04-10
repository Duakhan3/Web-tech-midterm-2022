var express = require('express');
const Issue = require('../models/issue');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/WholeList',async function (req, res, next) {
    try{
        const movies = await db.Titles.find().sort({tid: 1})
        res.status(200).json(movies);
    }catch(err){
        console.log(err.message)
    }
});

/* GET home page. */
router.get('/movieslist/:mname', async function (req, res, next) {
    try{
        const movies = await db.Titles.find({title: req.params.mname}).sort({tid: 1})
        res.status(200).json(movies);
    }catch(err){
        console.log(err.message)
    }
});

router.get('/issuelist/:tid',async function (req, res, next) {
    try{
        const Selectedmovie = await db.Titles.find({tid: req.params.tid}).sort({tid: 1})
        res.status(200).json(Selectedmovie[0]);
    }catch(err){
        console.log(err.message)
    }
});

router.post('/issueMovies', async function (req, res, next) {
    try{
        console.log(JSON.parse(req.body.final));
        const data = JSON.parse(req.body.final)
        let IssuedMovies = [];

        data.map((val) => {
            IssuedMovies.push(new Issue({tid: val.tid, rent: val.rent}))
        })
        console.log(IssuedMovies, "IssuedMovies");
        
        db.Issues.insertMany(IssuedMovies)
        .then(insertedMovies => {
            res.status(200).json(insertedMovies);    
        }); 
        // res.status(200).json(Selectedmovie[0]);
    }catch(err){
        console.log(err.message)
    }
});

module.exports = router;
