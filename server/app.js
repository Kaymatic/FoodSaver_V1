const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const listingsRoutes = require('./routes/listings');

app.use('/api/auth', authRoutes);
app.use('/api/listings', listingsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
