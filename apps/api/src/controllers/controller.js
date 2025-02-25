import { getEvents, postEvents, editEvents, removeEvents } from "../models/models.js";

export async function getEventsController(req, res) {
  try{
    const events = await getEvents();
    res.status(200).json(events);
  }catch(error){
    console.log(error);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function postEventsController(req, res) {
  const newEvent = req.body;
  try{
    const createdEvent = await postEvents(newEvent);
    res.status(201).json(createdEvent);
  }catch(error){
    console.log(error);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function editEventsController(req, res) {
    const eventId = req.params.eventId;
    if (eventId.length !== 24) {
        res.status(400).json({message: "Invalid ID"});
        return;
    }
    try{
        const newEvent = {
           title: req.body.title,
           start: req.body.start,
           end: req.body.end,
           backgroundColor: req.body.backgroundColor,
           borderColor: req.body.borderColor,
           textColor: req.body.textColor
        }
        const updatedEvent = await editEvents(eventId, newEvent);
        res.status(200).json(updatedEvent);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function removeEventsController(req, res) {
    const eventId = req.params.eventId;
    if (eventId.length !== 24) {
        res.status(400).json({message: "Invalid ID"});
        return;
    }
    try{
        const deletedEvent = await removeEvents(eventId);
        res.status(200).json(deletedEvent);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}