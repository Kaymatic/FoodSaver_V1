const express = require('express');
const Listing = require('../models/listing');

const router = express.Router();

// Request new item
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    try {
        const newRequest = new Listing({ title, description });
        await newRequest.save();
        res.status(201).json({ success: true, request: newRequest });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
});

module.exports = router;
