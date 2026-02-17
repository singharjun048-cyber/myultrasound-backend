const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const listingsRoutes = require("./routes/listings");

app.use("/api/listings", listingsRoutes);

app.get("/", (req, res) => {
  res.send("MyUltrasound Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
