const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
const authRoutes = require('./routes/auth');
const listingsRoutes = require('./routes/listings');
const addItemsRoutes = require('./routes/add-items');
const requestItemsRoutes = require('./routes/request-items');

app.use('/api/auth', authRoutes);
app.use('/api/listings', listingsRoutes);
app.use('/api/add-items', addItemsRoutes);
app.use('/api/request-items', requestItemsRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
