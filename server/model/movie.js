
const mongoose = require("mongoose");

let movieModel = mongoose.Schema({
    Title : String,
    Genre: String,
    ReleaseYear: String,
    Rating: String,
    Description: String,
    Status: String
},
{
    collection:"movie"
});
module.exports =mongoose.model('Movie',movieModel);
