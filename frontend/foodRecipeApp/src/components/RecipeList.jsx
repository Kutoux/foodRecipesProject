import { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../api/recipes";
import RecipeCard from "./RecipeCard";

import { Typography, CircularProgress, Box } from "@mui/material";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load recipes from backend
  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  // Delete handler (optional, for future UI button)
  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      setRecipes(prev => prev.filter(recipe => recipe._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Loading state
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Typography color="error" sx={{ mt: 2 }}>
        {error}
      </Typography>
    );
  }

  // Empty state
  if (recipes.length === 0) {
    return (
      <Typography sx={{ mt: 2 }}>
        No recipes found.
      </Typography>
    );
  }

  // Render list
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe._id}   // MongoDB uses _id
          recipe={recipe}
          onDelete={handleDelete} // optional
        />
      ))}
    </>
  );
}