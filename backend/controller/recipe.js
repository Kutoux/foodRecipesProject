const Recipes = require("../models/recipe")
const getRecipes = async (req, res) => {
    const recipes = await Recipes.find()
    return res.json(recipes)
}

const getRecipe = async (req, res) => {
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe = async (req, res) => {
    const {title, ingredients, instructions, time} = req.body

        if(!title || !ingredients || !instructions){
            return res.json({message:"Required fields can't be empty"})
        }
    
        const newRecipe = await Recipes.create({
            title, ingredients, instructions, time
        })

        return res.json(newRecipe)
}

const editRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  //validation
  if (!title || !ingredients || !instructions) {
    return res.status(400).json({
      message: "Required fields can't be empty"
    });
  }

  try {
    const updated = await Recipes.findByIdAndUpdate(
      req.params.id,
      { title, ingredients, instructions, time },
      { new: true }
    );

    //handle not found
    if (!updated) {
      return res.status(404).json({
        message: "Recipe not found"
      });
    }

    //return actual updated document
    return res.json(updated);

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Server error"
    });
  }
};

const deleteRecipe = (req, res) => {
    res.json({message: "hello"})
}

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe }
