import { Card, CardContent, Typography } from "@mui/material";

export default function RecipeCard({ recipe }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {recipe.title}
        </Typography>

        <Typography variant="body2">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
}