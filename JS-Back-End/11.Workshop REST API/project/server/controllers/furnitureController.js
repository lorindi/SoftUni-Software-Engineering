const router = require("express").Router();

const furnitureManager = require("../managers/furnitureManager");

router.get("/", async (req, res) => {
  // const qs = req.query;
  // console.log(qs);
  const furnitures = await furnitureManager.getAll(req.query);
  res.json(furnitures);
});
router.post("/", async (req, res) => {
  try {
    await furnitureManager.create({ ...req.body, _ownerId: req.user._id });
    res.status(204).end();
  } catch (err) {
    console.log(err);

    res.status(400).json({
      message: "Cannot create furniture",
    });
  }
});

router.get("/:furnituredId", async (req, res) => {
  const furniture = await furnitureManager.getOne(req.params.furnituredId);
  res.json(furniture);
});
router.put("/:furnituredId", async (req, res) => {
  await furnitureManager.update(req.params.furnituredId, req.body);
  res.status(204).end();
});
router.delete("/:furnituredId", async (req, res) => {
  await furnitureManager.delete(req.params.furnituredId);
  res.status(204).end();
});
module.exports = router;
