// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const Participant = require("./models/participant");
const { CompletePayment } = require("./paymentUtils");

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
connectDB();
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  try {
    const participantData = req.body;
    const participant = new Participant(participantData);
    const savedParticipant = await participant.save();

    // Mocked payment response
    const paymentResponse = CompletePayment(participantData);

    if (paymentResponse.success) {
      res.status(200).json({
        success: true,
        message: "Registration and payment done successfully!! 🥳",
        participant: savedParticipant,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Payment failed",
        participant: null,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
