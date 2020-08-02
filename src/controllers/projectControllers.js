require("../db/db");
const express = require("express");
const router = new express.Router();
const Project = require("../models/project");

const addProject = async (req, res) => {
  const project = new Project(req.body);
  // const members = Object.values(req.body.members);
  // project.members.value = members;
  try {
    await project.save();
    res.status(201).send(project);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getAllProjects = async (req, res) => {
  try {
    const project = await Project.find();
    res.send(project);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const findOne = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).send();
    res.send(project);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const deleteOne = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).send();
    res.send(project);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const modify = async (req, res) => {
  const allowed = ["projectName", "proDescription", "members", "guide"];
  const updates = Object.keys(req.body);
  const isValid = updates.every((update) => {
    return allowed.includes(update);
  });
  console.log(isValid + updates);

  if (!isValid) {
    return res.status(400).send({ error: "invalid updates" });
  }
  try {
    const project = await Project.findById(req.params.id);
    updates.forEach((update) => {
      // if (update === "members") {
      //   project.members.value = Object.values(req.body.members);
      // } else {
      project[update] = req.body[update];
      // }
    });

    if (!project) {
      return res.status(404).send();
    }
    await project.save();
    res.send(project);
  } catch (e) {
    res.status(400).send();
  }
};

module.exports = {
  addProject,
  getAllProjects,
  modify,
  findOne,
  deleteOne,
};
