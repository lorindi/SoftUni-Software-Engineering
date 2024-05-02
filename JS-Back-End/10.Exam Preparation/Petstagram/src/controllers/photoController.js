const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("photos/create");
});

module.exports = router;
