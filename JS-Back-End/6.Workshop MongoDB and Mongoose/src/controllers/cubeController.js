// http request response, validation
const router = require("express").Router();
const cubeManager = require("../managers/cubeManager.js");
const accessoryManager = require("../managers/accessoryManager");

router.get("/create", (req, res) => {
  res.render("create");
});
router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});
router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean();

  if (!cube) {
    return res.redirect("/404");
  }
  res.render("details", { cube });
});
router.get("/:cubeId/attach-accessory", async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const accessories = await accessoryManager.getOthers(cube.accessories).lean();

  const hasAccessories = accessories.length > 0;
  res.render("accessory/attach", { cube, accessories, hasAccessories });
});
router.post("/:cubeId/attach-accessory", async (req, res) => {
  const { accessory: accessoryId } = req.body;
  const cubeId = req.params.cubeId;
  await cubeManager.attachAccessory(cubeId, accessoryId);
  res.redirect(`/cubes/${cubeId}/details`);
});
module.exports = router;
