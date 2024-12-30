const express = require("express");
const { sendMessages } = require("../controllers/messageController");

const router = express.Router();

router.get("/send-messages", sendMessages);

module.exports = router;
