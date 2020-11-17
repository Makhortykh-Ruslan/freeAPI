const express = require("express");
const router = express.Router();
const path = require("path");

router.get("*", (req, res) => {

  // res.send("Блять ОНО РАБОТАЕТ")
  res.sendFile(path.join(__dirname, "../static/index.html"));
});

module.exports = router;
