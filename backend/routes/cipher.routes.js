const express = require("express");
const router = express.Router();
const cipher = require("../controllers/cipher.controller");
const auth = require("../middleware/auth.middleware");

router.post("/encrypt", auth, cipher.encrypt);
router.post("/decrypt", auth, cipher.decrypt);

module.exports = router;