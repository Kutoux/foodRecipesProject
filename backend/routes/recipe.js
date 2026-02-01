const express = require("express");
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require("../controller/recipe");
const router = express.Router();

router.get("/", getRecipes) //get all recipes
router.get("/:id", getRecipe) //get one recipe by ID
router.post("/", addRecipe) //adds one recipe
router.put("/:id", editRecipe) //edits one recipe
router.delete("/:id", deleteRecipe) //deletes one recipe

module.exports = router;
