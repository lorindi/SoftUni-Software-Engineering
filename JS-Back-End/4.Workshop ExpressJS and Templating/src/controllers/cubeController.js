const router = require("express").Router();
const cubeManager = require("../managers/cubeManager.js");
router.get("/create", (req, res) => {
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
router.get("/:cubeId/details", (req, res) => {
  const cube = cubeManager.getOne(req.params.cubeId);
  res.render("details", { cube });
});

module.exports = router;
