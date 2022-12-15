const express = require("express");
require('dotenv').config();
const router = express.Router();
const {upload} = require('../utils/helper');
const {RecipeUpload,getRecipe, deleteRecipe, getRecipeInfo} = require('../controllers/Recipecontroller');

router.post("/uploadrecipe",upload.single("image"),RecipeUpload);
router.get("/getrecipe",getRecipe);
router.get("/getrecipeinfo/:id",getRecipeInfo);
router.delete("/deleterecipe",deleteRecipe);

module.exports = router;