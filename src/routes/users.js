const express = require("express");

const {
  getUser,
  createUser,

} = require("../controllers/users");

const router = express.Router();

router.get("/api/users", getUser);
router.post("/api/users", createUser);

module.exports = router;
