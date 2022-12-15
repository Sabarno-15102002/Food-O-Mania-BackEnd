const Recipe = require('../models/recipe');

exports.RecipeUpload = async (req, res, next) => {

    const FoodRecipe = new Recipe({
        name: req.body.name,
        type: req.body.type,
        img: req.file.buffer,
        ingredients: req.body.ingredients,
        recipe: req.body.recipe,
        userid: req.body.user
    });

    try {

        const rec = await FoodRecipe.save();
        res.json(rec);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getRecipe = async (req, res, next) => {
    try {
        const FoodRecipe = await Recipe.find();

        res.status(201).json({
            success: true,
            FoodRecipe
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getRecipeInfo = async (req, res, next) => {
    try {
        const id=req.params.id;

        const FoodRecipe = await Recipe.find({_id:id});
        console.log(req);
        console.log(id,FoodRecipe);
        res.status(201).json({
            success: true,
            FoodRecipe
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

exports.updateRecipe = async (req,res,next) => {

}

exports.deleteRecipe = async (req, res, next) => {
    try {
        const id = req.body.id;
        console.log(req);
        const FoodRecipe = await Recipe.findOneAndDelete({_id: id});

        res.status(201).json({
            success: true,
            message: " Product deleted",

        })
    }
    catch (error) {
        console.log(error);
        next(error);

    }
}