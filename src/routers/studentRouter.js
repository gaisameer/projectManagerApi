require("../db/db");
const express = require("express");
const router = new express.Router();
const Student = require("../models/student");
const controller = require("../controllers/studControllers");

router.get("/student", async (req, res) => {
  controller.readAll(req, res);
});

router.post("/student", async (req, res) => {
  controller.addStud(req, res);
});

router.get("/student/:id", async (req, res) => {
  controller.findOne(req, res);
});

router.patch("/student/:id", (req, res) => {
  controller.modify(req, res);
});

router.delete("/student/:id", async (req, res) => {
  controller.deleteOne(req, res);
});

module.exports = router;
