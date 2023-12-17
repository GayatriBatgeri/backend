const mongoose = require("mongoose");

// Define the schema for the participant
const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  batch: { type: String, required: true },
  email: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
});

// Create a model using the schema
const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
