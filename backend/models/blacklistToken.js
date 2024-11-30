const mongoose = require('mongoose');

// Define the schema
const blackListTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '1d', // Token will be removed automatically after 1 day
  },
});

// Check if the model already exists, and use it if it does
const BlackListToken =
  mongoose.models.BlackListToken || mongoose.model('BlackListToken', blackListTokenSchema);

module.exports = BlackListToken;
