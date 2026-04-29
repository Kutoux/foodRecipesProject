import axios from "axios";

// GET all recipes
export const getRecipes = async () => {
  const res = await axios.get("/recipe");
  return res.data;
};

// GET one recipe
export const getRecipe = async (id) => {
  const res = await axios.get(`/recipe/${id}`);
  return res.data;
};

// POST new recipe
export const addRecipe = async (recipe) => {
  const res = await axios.post("/recipe", recipe);
  return res.data;
};

// PUT update recipe
export const editRecipe = async (id, recipe) => {
  const res = await axios.put(`/recipe/${id}`, recipe);
  return res.data;
};

// DELETE recipe
export const deleteRecipe = async (id) => {
  const res = await axios.delete(`/recipe/${id}`);
  return res.data;
};