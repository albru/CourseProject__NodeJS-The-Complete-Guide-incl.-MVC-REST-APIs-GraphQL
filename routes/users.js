const path = require("path");

const express = require("express");

const usersData = require("./add-user");

const router = express.Router();

router.get("/users", (req, res, next) => {
  const userName = usersData.users;
  res.render("users", { user: userName, pageTitle: "Users", path: "/users" });
});

module.exports = router;
