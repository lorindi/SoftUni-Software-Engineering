const router = require("express").Router();
const userManager = require("../managers/userManager");
router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  console.log(req.body);
  await userManager.register({ username, password, repeatPassword });
  res.redirect("/users/login");
});
module.exports = router;
