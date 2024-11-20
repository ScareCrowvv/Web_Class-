var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Movie = require('../model/movie');
const movie = require('../model/movie');
let movieController = require('../controllers/movie.js')

router.get('/',async(req,res,next)=>{
try{
    const MovieList = await Movie.find();
    res.render('Movie/list',{
        title:'Movies',
        MovieList:MovieList
    })}
    catch(err){
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
    });
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Movie/add',{
            title: 'Add Movie'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
});
router.post('/add',async(req,res,next)=>{
    try{
        let newMovie = Movie({
            "Title":req.body.Title,
            "Genre":req.body.Genre,
            "ReleaseYear":req.body.ReleaseYear,
            "Rating":req.body.Rating,
            "Description":req.body.Description,
            "Status":req.body.Status
        });
        Movie.create(newMovie).then(()=>{
            res.redirect('/movieslist');
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
});
router.get('/edit/:id',async(req,res,next)=>{
    try{
        const id = req.params.id;
        const movieToEdit= await Movie.findById(id);
        res.render('Movie/edit',
            {
                title:'Edit Movie',
                Movie:movieToEdit
            }
        )
    }
    catch(err)
    {
        console.error(err);
        next(err); 
    }
});
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        let updatedMovie = Movie({
            "_id":id,
            "Title":req.body.Title,
            "Genre":req.body.Genre,
            "ReleaseYear":req.body.ReleaseYear,
            "Rating":req.body.Rating,
            "Description":req.body.Description,
            "Status":req.body.Status
        });
        Movie.findByIdAndUpdate(id,updatedMovie).then(()=>{
            res.redirect('/movieslist')
        })
    }
    catch(err){
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
});
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        Movie.deleteOne({_id:id}).then(()=>{
            res.redirect('/movieslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
});
module.exports = router;