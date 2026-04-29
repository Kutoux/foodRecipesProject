import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Stack
} from "@mui/material";

export default function RecipeCard({ recipe, onDelete }) {
  return (
    <Card
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography variant="h6" gutterBottom>
          {recipe.title}
        </Typography>

        {/* Time */}
        {recipe.time && (
          <Chip
            label={`${recipe.time} min`}
            size="small"
            sx={{ mb: 1 }}
          />
        )}

        {/* Ingredients*/}
        <Typography variant="body2" color="text.secondary">
          {Array.isArray(recipe.ingredients)
            ? recipe.ingredients.slice(0, 3).join(", ")
            : recipe.ingredients}
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small" color="error" onClick={() => onDelete(recipe._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}