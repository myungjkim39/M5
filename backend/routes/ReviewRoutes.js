const express = require("express");
const router = express.Router();

//const controllers
const Review = require("../controllers/ReviewSchema");

//api routes
router.get("/review", async (req, res) => {
  try {
    const data = await Review.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
