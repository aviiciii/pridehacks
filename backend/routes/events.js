const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new event
router.post('/', async (req, res) => {
  try {
    const { title, description, date, image } = req.body;
    const event = new Event({ title, description, date, image });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
