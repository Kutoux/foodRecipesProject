import api from "./axios";

// GET all recipes
export const getRecipes = async () => {
  const res = await api.get("/recipe");
  return res.data;
};

// GET one recipe
export const getRecipe = async (id) => {
  const res = await api.get(`/recipe/${id}`);
  return res.data;
};

// POST new recipe
export const addRecipe = async (recipe) => {
  const res = await api.post("/recipe", recipe);
  return res.data;
};

// PUT update recipe
export const editRecipe = async (id, recipe) => {
  const res = await api.put(`/recipe/${id}`, recipe);
  return res.data;
};

// DELETE recipe
export const deleteRecipe = async (id) => {
  const res = await api.delete(`/recipe/${id}`);
  return res.data;
};