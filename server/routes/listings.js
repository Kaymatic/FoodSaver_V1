const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

// Mock listings data
let listings = [];

router.get('/', (req, res) => {
    res.json(listings);
});

router.post('/', (req, res) => {
    const { title, description, location } = req.body;
    const newListing = new Listing(title, description, location);
    listings.push(newListing);
    res.status(201).json(newListing);
});

module.exports = router;
