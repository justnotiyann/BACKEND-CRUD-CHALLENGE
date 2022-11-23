const router = require("express").Router();
const controllers = require("../controllers/productsControllers");

router.get("/", (req, res) => {
  res.send("oe");
});

module.exports = router;
