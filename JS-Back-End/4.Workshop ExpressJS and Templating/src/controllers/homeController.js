const router = require("express").Router();
const cubeManager = require("../managers/cubeManager");

router.get("/", (req, res) => {
  const {search, from, to} = req.query
  // console.log(req.query);
  // req.params
  // req.body
  // req.query
  const cubes = cubeManager.getAll(search, from, to);
  res.render("index", { cubes });
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get('/404', (req, res) => {
  res.render('404')
})
module.exports = router;
