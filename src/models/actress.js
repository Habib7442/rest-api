const express = require("express");
const mongoose = require("mongoose");

const actressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const ActressImages = new mongoose.model("ActressImages", actressSchema);

module.exports = ActressImages;
