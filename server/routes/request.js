const express = require('express');
const Request = require('../models/request');
const router = express.Router();

router.post('/add', async (req, res) => {
    const { title, reason } = req.body;

    try {
        const request = new Request({ title, reason });
        await request.save();
        res.status(201).json({ message: 'Request added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding request', error: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const requests = await Request.find();
        res.json(requests);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching requests', error: err });
    }
});

module.exports = router;
