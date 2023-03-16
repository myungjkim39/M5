const express = require("express");
const router = express.Router();

//const controllers
const Product = require("../controllers/ProductSchema");

// const middlewares

//api routes
router.get("/product", async (req, res) => {
  try {
    // const newProduct = new Product({
    //   name: "Device Name",
    //   specs: ["Specs", "Specs"],
    //   price: "$99",
    //   image:
    //     "https://www.pbtech.co.nz/thumbs/150/N/B/NBKHNB450903.webp?h=3350490020",
    // });
    // await newProduct.save();

    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
