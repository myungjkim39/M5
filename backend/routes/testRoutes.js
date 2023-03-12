const express = require("express");
const router = express.Router();

//import controllers
const Message = require("../controllers/test");

// import middleware

//api routes
router.get("/", async (req, res) => {
  try {
    // const newMessage = new Message ({ name: "MJ" });
    // await newMessage.save();

    const data = await Message.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
