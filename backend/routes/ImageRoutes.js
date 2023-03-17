const express = require("express");
const router = express.Router();

//import controllers
const Image = require("../controllers/ImageSchema");

//api routes
router.get("/image", async (req, res) => {
  try {
    const data = await Image.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
