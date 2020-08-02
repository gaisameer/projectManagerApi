require("../db/db");
const express = require("express");
const router = new express.Router();
const Guide = require("../models/guide");

const addGuide = async (req, res) => {
  const guide = new Guide(req.body);
  console.log(req.body);

  try {
    await guide.save();
    res.status(201).send(guide);
  } catch (e) {
    res.status(400).send(e);
  }
};

const readAll = async (req, res) => {
  try {
    const guide = await Guide.find();
    res.send(guide);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const findOne = async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.id);
    if (!guide) return res.status(404).send();
    res.send(guide);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const deleteOne = async (req, res) => {
  try {
    const guide = await Guide.findByIdAndDelete(req.params.id);
    if (!guide) return res.status(404).send();
    res.send(guide);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const modify = async (req, res) => {
  const allowed = ["name", "registrationId", "dept", "password", "projects"];
  const updates = Object.keys(req.body);
  console.log(updates);
  const isValid = updates.every((update) => {
    return allowed.includes(update);
  });
  console.log(isValid);

  if (!isValid) {
    return res.status(400).send({ error: "invalid updates" });
  }
  try {
    const guide = await Guide.findById(req.params.id);
    updates.forEach((update) => {
      if (update === "password" && req.body[update].length < 8) {
        console.log("password should have atleast 8 charactes");
      } else guide[update] = req.body[update];
    });

    if (!guide) {
      return res.status(404).send();
    }
    await guide.save();
    res.send(guide);
  } catch (e) {
    res.status(400).send();
  }
};

module.exports = {
  addGuide,
  readAll: readAll,
  findOne: findOne,
  deleteOne: deleteOne,
  modify: modify,
};
