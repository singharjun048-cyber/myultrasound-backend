const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const listingsRoute = require("./routes/listings");

// Use Routes
app.use("/api/listings", listingsRoute);

// Root Test Route
app.get("/", (req, res) => {
  res.send("MyUltrasound Backend Running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
