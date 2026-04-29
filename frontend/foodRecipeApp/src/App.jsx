import { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "./api/recipes";

import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Button,
  Container,
  Typography
} from "@mui/material";

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Fetch recipes
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await getRecipes();
        setRecipes(res);
      } catch (err) {
        console.error(err);
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  // Theme
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      text: {
        primary: darkMode ? "#e0e0e0" : "#222",
        secondary: darkMode ? "#a0a0a0" : "#555"
      }
    }
  });

  // Add recipe
  const handleRecipeAdded = (newRecipe) => {
    setRecipes(prev => [newRecipe, ...prev]);
  };

  // Delete recipe
  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      setRecipes(prev => prev.filter(selectedRecipe => selectedRecipe._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container sx={{ py: 4 }}>
        {/* Header */}
        <Typography variant="h4" sx={{ mb: 2 }}>
          Recipe App
        </Typography>

        {/* Dark mode toggle */}
        <Button
          variant="outlined"
          onClick={() => setDarkMode(!darkMode)}
          sx={{ mb: 3 }}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </Button>

        {/* Form */}
        <AddRecipeForm onRecipeAdded={handleRecipeAdded} />

        {/* Loading / Error */}
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {/* Recipe list */}
        {!loading && !error && (
          <RecipeList
            recipes={recipes}
            onDelete={handleDelete}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}