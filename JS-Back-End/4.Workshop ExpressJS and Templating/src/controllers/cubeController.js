const router = require("express").Router();
const cubeManager = require("../managers/cubeManager.js");
router.get("/create", (req, res) => {
  console.log(cubeManager.getAll());
  res.render("create");
});
router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
//   console.log(req.body);
  res.redirect("/");
});
module.exports = router;
