const express = require('express');
const Listing = require('../models/listing');
const router = express.Router();

router.post('/add', async (req, res) => {
    const { title, description, images } = req.body;

    try {
        const listing = new Listing({ title, description, images });
        await listing.save();
        res.status(201).json({ message: 'Listing added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding listing', error: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching listings', error: err });
    }
});

module.exports = router;
