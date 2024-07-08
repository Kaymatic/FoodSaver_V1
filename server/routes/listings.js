const express = require('express');
const Listing = require('../models/listing');

const router = express.Router();

// Get all listings
router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.status(200).json({ success: true, listings });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
});

module.exports = router;
