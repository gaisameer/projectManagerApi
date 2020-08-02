require("../db/db");
const express = require("express");
const router = new express.Router();
const Log = require("../models/logs");
const controllers = require("../controllers/logControllers");
router.post("/log", async (req, res) => {
  controllers.addLog(req, res);
});

router.get("/log", async (req, res) => {
  controllers.readAll(req, res);
});

router.patch("/log/:id", (req, res) => {
  controllers.modify(req, res);
});

router.get("/log/:id", async (req, res) => {
  controllers.findOne(req, res);
});

router.delete("/log/:id", async (req, res) => {
  controllers.deleteOne(req, res);
});

router.get("/log/project/:id", async (req, res) => {
  controllers.getProLog(req, res);
});

module.exports = router;
