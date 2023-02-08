const Events = require('../Models/EventsModel');
// const APIFeatures = require('./../utils/apiFeatures');

// GET ROUTES

var data;

exports.getAllEvents = async (req, res) =>{
  data = await Events.find({});
  try {
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

exports.getEventById = async (req, res) =>{
  try {
    data = await Events.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).send("ID Not Found");
  }
}

// POST ROUTES

exports.createEvent = async (req, res) => {
  data = await Events.create(req.body);
  return res.status(200).json(data);
}

// UPDATE ROUTES

exports.updateEventByID = async(req, res) =>{
  try {
    data = await Events.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).send("ID Not Found");
  }
}

// DELETE ROUTES

exports.deleteEventById = async (req, res) =>{
  try {
   data = await Events.findByIdAndDelete(req.params.id);
    if (!data) res.status(404).send("Error, No event found with this ID");
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
}

