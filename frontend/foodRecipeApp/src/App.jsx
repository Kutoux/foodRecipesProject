// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchRecipes() {
//       try {
//         const res = await axios.get("http://localhost:5000/recipe");
//         console.log("DATA:", res.data);
//         setRecipes(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load recipes");
//       }
//     }

//     fetchRecipes();
//   }, []);

//   if (error) return <h2>{error}</h2>;

//   return (
//     <div>
//       <h1>Recipes</h1>

//       {recipes.length === 0 ? (
//         <p>No recipes found</p>
//       ) : (
//         recipes.map((r) => (
//           <div key={r._id}>
//             <h3>{r.title}</h3>
//             <p>{r.ingredients}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider, CssBaseline, createTheme, Button } from "@mui/material";

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/recipe")
      .then(res => setRecipes(res.data));
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      text: {
        primary: darkMode ? "#e0e0e0" : "#222",
        secondary: darkMode ? "#a0a0a0" : "#555"
      }
    }
  });

  //called after adding a recipe
  const handleRecipeAdded = (newRecipe) => {
    setRecipes(prev => [newRecipe, ...prev]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div style={{ padding: 20 }}>

        <Button onClick={() => setDarkMode(!darkMode)}>
          Toggle Mode
        </Button>
        <AddRecipeForm onRecipeAdded={handleRecipeAdded} />

        <RecipeList recipes={recipes} />
      </div>
    </ThemeProvider>
  );
}