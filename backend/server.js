// import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const TestRoutes = require("./routes/TestRoutes");
const ReviewRoutes = require("./routes/ReviewRoutes")
require("dotenv").config();

// app
const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Connection error", err));

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// routes
app.use(TestRoutes);
app.use(ReviewRoutes);

//PORT
const PORT = process.env.PORT || 8082;

// listener
app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);