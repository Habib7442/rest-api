const express = require("express");
const router = new express.Router();

const ActressImages = require("../models/actress");

// Post Data
router.post("/actress", async (req, res) => {
  try {
    const addingActressImage = new ActressImages(req.body);
    console.log(req.body);
    const insertActress = await addingActressImage.save();
    res.status(201).send(insertActress);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Get Data
router.get("/actress", async (req, res) => {
  try {
    const getActress = await ActressImages.find({});
    res.status(200).send(getActress);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update Data
router.patch("/actress/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getActress = await ActressImages.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getActress);
  } catch (e) {
    res.status(500).send(e);
  }
});
//Delete Data
router.delete("/actress/:id", async (req, res) => {
  try {
    const getActress = await ActressImages.findByIdAndDelete(req.params.id);
    res.send(getActress);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
