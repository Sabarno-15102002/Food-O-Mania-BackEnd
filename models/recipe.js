const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    img: Buffer,
    ingredients: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    likecount:{
        type: Number
    },
    userid: {
        type: String
    }
});

const Recipe = mongoose.model('Recipe',recipeSchema);
module.exports = Recipe;