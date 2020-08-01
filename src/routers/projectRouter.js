require("../db/db");
const express = require("express");
const router = new express.Router();
const Project = require("../models/project");
const controller = require("../controllers/projectControllers");

router.post("/project", async (req, res) => {
  controller.addProject(req, res);
});

router.get("/project", async (req, res) => {
  controller.getAllProjects(req, res);
});

router.patch("/project/:id", (req, res) => {
  controller.modify(req, res);
});

router.get("/project/:id", async (req, res) => {
  controller.findOne(req, res);
});

router.delete("/project/:id", async (req, res) => {
  controller.deleteOne(req, res);
});

module.exports = router;
