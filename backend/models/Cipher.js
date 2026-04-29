const mongoose = require("mongoose");

const CipherSchema = new mongoose.Schema({
  hash: String,
  shift: Number,
  used: { type: Boolean, default: false },
});

module.exports = mongoose.model("Cipher", CipherSchema);