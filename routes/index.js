const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Inicio",
    year: new Date().getFullYear()
  });
});

module.exports = router;
