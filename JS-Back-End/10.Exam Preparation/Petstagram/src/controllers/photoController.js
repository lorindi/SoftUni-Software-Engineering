const router = require("express").Router();
const photoManager = require("../managers/photoManager");
const { getErrorMessage } = require("../utils/errorHelpers");

router.get("/", async (req, res) => {
  const photos = await photoManager.getAll().lean();
  res.render("photos", { photos });
});

router.get("/create", (req, res) => {
  res.render("photos/create");
});

router.post("/create", async (req, res) => {
  const photoData = {
    ...req.body,
    owner: req.user._id,
  };

  try {
    await photoManager.create(photoData);
    res.redirect("/photos");
  } catch (err) {
    res.render("photos/create", { error: getErrorMessage(err) });
  }
});

router.get("/:photoId/details", async (req, res) => {
  const photoId = req.params.photoId;
  const photo = await photoManager.getOne(photoId).lean();
  const isOwner = req.user?._id == photo.owner._id;
  res.render("photos/details", { photo, isOwner });
});
module.exports = router;
