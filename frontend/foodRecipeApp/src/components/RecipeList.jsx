import { Grid, Typography } from "@mui/material";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, onDelete }) {
  if (!recipes || recipes.length === 0) {
    return (
      <Typography sx={{ mt: 2 }}>
        No recipes found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {recipes.map((r) => (
        <Grid item xs={12} sm={6} md={4} key={r._id}>
          <RecipeCard recipe={r} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
}