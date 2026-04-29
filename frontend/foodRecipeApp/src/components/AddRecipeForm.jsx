import { useState } from "react";
import { addRecipe } from "../api/recipes";

import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Stack
} from "@mui/material";

export default function AddRecipeForm({ onRecipeAdded }) {
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    time: ""
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.title || !form.ingredients || !form.instructions) {
    setError("Please fill all required fields");
    return;
  }

  try {
    const data = await addRecipe(form);

    onRecipeAdded(data);

    setForm({
      title: "",
      ingredients: "",
      instructions: "",
      time: ""
    });

    setError(null);

  } catch (err) {
    console.error(err);
    setError("Failed to add recipe");
  }
};

  return (
    <Paper
      sx={{
        p: 3,
        mb: 4,
        backgroundColor: "background.paper",
        borderRadius: 3
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add Recipe
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Ingredients"
            name="ingredients"
            value={form.ingredients}
            onChange={handleChange}
            fullWidth
            helperText="Separate with commas"
            required
          />

          <TextField
            label="Instructions"
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />

          <TextField
            label="Time (minutes)"
            name="time"
            type="number"
            value={form.time}
            onChange={handleChange}
            fullWidth
          />

          {error && (
            <Typography color="error">
              {error}
            </Typography>
          )}

          <Button variant="contained" type="submit">
            Add Recipe
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}