const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Request', requestSchema);
