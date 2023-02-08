const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EventSchema = new mongoose.Schema({
  id: ObjectId,
  description: {
    type: String,
    required: [true, 'An event must have a description'],
  },
  userId: {
    type: String,
    required: [true, 'An event must have a user ID'],
  },
  dateTime: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  }
})

const Events = mongoose.model('Events', EventSchema);

module.exports = Events;