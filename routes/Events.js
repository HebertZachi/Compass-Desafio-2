const express = require('express');
const EventsController = require('../Controllers/EventsController');

const router = express.Router();

router
  .route('/events')
  .get(EventsController.getAllEvents)
  .post(EventsController.createEvent);

router
  .route('/events/:id')
  .get(EventsController.getEventById)
  .patch(EventsController.updateEventByID)
  .delete(EventsController.deleteEventById);

module.exports = router;
