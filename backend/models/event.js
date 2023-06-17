const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String},
  date: { type: String},
  location:{ type: String},
  image: { type: String },
}, { collection: 'events' }); // Specify the collection name

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
