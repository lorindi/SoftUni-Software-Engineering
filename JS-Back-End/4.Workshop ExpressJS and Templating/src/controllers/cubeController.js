const router = require("express").Router();
router.get("/create", (req, res)=> {
    res.render('create')
});
router.post('/create', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})
module.exports = router;
