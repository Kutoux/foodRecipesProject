const express = require("express");
const connectDb = require("./config/connectionDb");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");



const PORT = process.env.PORT || 5000;


connectDb()

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json())

app.use("/recipe", require("./routes/recipe"))

app.listen(PORT, (err) => {
    console.log(`App is listening on port ${PORT}`)
})