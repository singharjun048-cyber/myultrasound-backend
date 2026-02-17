const express = require("express");
const router = express.Router();

// Sample data (India marketplace demo)
const listings = [
  {
    id: 1,
    title: "GE Voluson E8",
    price: "₹12,00,000",
    location: "Mumbai, India",
    condition: "Used"
  },
  {
    id: 2,
    title: "Philips Affiniti 50",
    price: "₹9,50,000",
    location: "Delhi, India",
    condition: "Refurbished"
  }
];

// GET all listings
router.get("/", (req, res) => {
  res.json(listings);
});

module.exports = router;
