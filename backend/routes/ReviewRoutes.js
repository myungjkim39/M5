const express = require("express");
const router = express.Router();

const Vector = "../images/Vector.jpg";
const Star = "../images/Star.jpg";

//const controllers
const Review = require("../controllers/ReviewSchema");

// const middlewares

//api routes
router.get("/review", async (req, res) => {
  try {
    // const newReview = new Review({
    //   imageSrc: Vector,
    //   author: "Great Value",
    //   imageSrc2: Star,
    //   comment: "WOWOWOWOWOWOWOWOWOWOWOWOWOW",
    // });
    // await newReview.save();

    const data = await Review.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
