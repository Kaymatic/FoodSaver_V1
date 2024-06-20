const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Mock user data
let users = [];

router.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User(username, email, password);
    users.push(newUser);
    res.status(201).json(newUser);
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
