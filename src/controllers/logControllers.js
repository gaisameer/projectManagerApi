require("../db/db");
const express = require("express");
const Log = require("../models/logs");

const addLog = (req, res) => {
  const log = new Log(req.body);
  log
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const readAll = (req, res) => {
  const log = Log.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const findOne = (req, res) => {
  const log = Log.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};
const deleteOne = (req, res) => {
  const log = Log.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const modify = async (req, res) => {
  const allowed = ["log"];
  const updates = Object.keys(req.body);
  const isValid = updates.every((update) => {
    return allowed.includes(update);
  });
  console.log(isValid + updates);

  if (!isValid) {
    return res.status(400).send({ error: "invalid updates" });
  }
  const log = await Log.findById(req.params.id);
  log[allowed[0]] = req.body[updates[0]];
  log
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const getProLog = async (req, res) => {
  const logs = await Log.find();

  const proLogs = logs.filter((value) => value.projectId === req.params.id);
  try {
    res.status(200).json(proLogs);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

module.exports = {
  addLog,
  readAll,
  findOne,
  deleteOne,
  modify,
  getProLog,
};
