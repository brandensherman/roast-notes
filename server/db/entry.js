const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a coffee origin or blend'],
  },
  roaster: {
    type: String,
    required: [true, 'Please add the name of the roaster'],
  },
  brewMethod: {
    type: String,
  },
  varietal: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating can not be more than 5'],
  },
  roastDate: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Entry', EntrySchema);
