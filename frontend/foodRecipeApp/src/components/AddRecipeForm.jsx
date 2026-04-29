import { useState } from "react";
import axios from "axios";

import {
  TextField,
  Button,
  Box,
  Typography
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

    try {
      const res = await axios.post(
        "http://localhost:5000/recipe",
        form
      );

      // clear form
      setForm({
        title: "",
        ingredients: "",
        instructions: "",
        time: ""
      });

      // update parent list
      if (onRecipeAdded) {
        onRecipeAdded(res.data);
      }

    } catch (err) {
      console.error(err);
      setError("Failed to add recipe");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 4 }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Add Recipe
      </Typography>

      <TextField
        fullWidth
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Ingredients"
        name="ingredients"
        value={form.ingredients}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Instructions"
        name="instructions"
        value={form.instructions}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
      />

      <TextField
        fullWidth
        label="Time (minutes)"
        name="time"
        value={form.time}
        onChange={handleChange}
        margin="normal"
        type="number"
      />

      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 2 }}
      >
        Add Recipe
      </Button>
    </Box>
  );
}