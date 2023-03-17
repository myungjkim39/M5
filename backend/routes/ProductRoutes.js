const express = require("express");
const router = express.Router();

//const controllers
const Product = require("../controllers/ProductSchema");

//api routes
router.get("/product", async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
