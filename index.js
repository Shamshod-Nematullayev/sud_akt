const express = require("express");
const cors = require("cors");

require("dotenv").config();
const app = express();

// Connect to db
require("./config/connectDB").connectDB();

app.use(express.json());
app.use(cors());

// app.use()

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening port: ${PORT}`));
