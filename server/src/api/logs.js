const { Router } = require('express');
const { ValidationError } = require('mongoose/lib/document');
const router = Router();
const LogEntry = require('../models/LogEntry')

router.get('/', async (req, res, next) => {
  try {
    const logEntries = await LogEntry.find();
    res.json(logEntries);
  } catch (error) {
    console.log(error.name);
    if (error.name === 'ValidationError'){
      res.status(ValidationError);
    }
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    console.log(req.body)
    const createdLogEntry = await logEntry.save();
    res.json(createdLogEntry);
  } catch (error) {
    console.log(error.name);
    if (error.name === 'ValidationError'){
      res.status(ValidationError);
    }
    next(error);
  }
})

module.exports = router;