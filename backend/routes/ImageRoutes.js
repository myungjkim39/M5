const express = require("express");
const router = express.Router();
//


// POST route to add a new review
router.post("/", async (req, res) => {
    const body = req.body;
  try {
    const newImage = await Post.create(body)
    newImage.save();
    res.status(201).json({msg: "new image uploaded...!"})
  }catch(error){
    res.status(409).json({message : error.message })
  }

});

module.exports = router;
