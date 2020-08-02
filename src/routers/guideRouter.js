require("../db/db");
const express = require("express");
const router = new express.Router();
const controller = require("../controllers/guideControllers");

router.get("/guide", async (req, res) => {
  controller.readAll(req, res);
});

router.post("/guide", async (req, res) => {
  controller.addGuide(req, res);
});

router.get("/guide/:id", async (req, res) => {
  controller.findOne(req, res);
});

router.patch("/guide/:id", (req, res) => {
  controller.modify(req, res);
});

router.delete("/guide/:id", async (req, res) => {
  controller.deleteOne(req, res);
});

module.exports = router;
