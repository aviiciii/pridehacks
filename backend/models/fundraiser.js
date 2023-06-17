const mongoose = require('mongoose');

const fundraiserSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String},
  targetAmount: { type: Number },
}, { collection: 'fundraisers' }); // Specify the collection name

const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);

module.exports = Fundraiser;
