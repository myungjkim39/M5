// import modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./db/Db");

require("dotenv").config();

// route imports
const TestRoutes = require("./routes/TestRoutes");
const ReviewRoutes = require("./routes/ReviewRoutes")
const ProductRoutes = require("./routes/ProductRoutes")
const ImageRoutes = require("./routes/ImageRoutes")

// app
const app = express();

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// routes
app.use(TestRoutes);
app.use(ReviewRoutes);
app.use(ProductRoutes);
app.use(ImageRoutes);

//PORT
const PORT = process.env.PORT || 8081;

// listener
connectDB();
app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);