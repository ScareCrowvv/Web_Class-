var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Movie = require('../model/movie');

// List all movies
router.get('/', async (req, res, next) => {
    try {
        const MovieList = await Movie.find();
        res.render('Movie/list', { title: 'Movies', MovieList });
    } catch (err) {
        console.error(err);
        res.render('Movie/list', { error: 'Error on the server' });
    }
});

// Show add movie form
router.get('/add', async (req, res, next) => {
    try {
        res.render('Movie/add', { title: 'Add Movie' });
    } catch (err) {
        console.error(err);
        res.render('Movie/list', { error: 'Error on the server' });
    }
});

// Add new movie
router.post('/add', async (req, res, next) => {
    try {
        let newMovie = new Movie(req.body);  // Create movie from form data
        await Movie.create(newMovie);
        res.redirect('/movieslist');
    } catch (err) {
        console.error(err);
        res.render('Movie/list', { error: 'Error on the server' });
    }
});

// Show movie edit form
router.get('/edit/:id', async (req, res, next) => {
    try {
        const movieToEdit = await Movie.findById(req.params.id);
        res.render('Movie/edit', { title: 'Edit Movie', Movie: movieToEdit });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// Update movie
router.post('/edit/:id', async (req, res, next) => {
    try {
        let updatedMovie = { ...req.body, _id: req.params.id };
        await Movie.findByIdAndUpdate(req.params.id, updatedMovie);
        res.redirect('/movieslist');
    } catch (err) {
        console.error(err);
        res.render('Movie/list', { error: 'Error on the server' });
    }
});

// Delete movie
router.get('/delete/:id', async (req, res, next) => {
    try {
        await Movie.deleteOne({ _id: req.params.id });
        res.redirect('/movieslist');
    } catch (err) {
        console.error(err);
        res.render('Movie/list', { error: 'Error on the server' });
    }
});

module.exports = router;
