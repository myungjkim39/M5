const express = require("express");
const router = express.Router();

//import controllers
const Message = require("../controllers/schema");

// import middlewares

//api routes
router.get("/test", async (req, res) => {
  try {
    // const newMessage = new Message ({ message: "Hello world" });
    // await newMessage.save();

    const data = await Message.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
