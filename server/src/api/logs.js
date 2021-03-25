const { Router } = require('express');
const { ValidationError } = require('mongoose/lib/document');
const router = Router();
const LogEntry = require('../models/LogEntry');

router.get('/', async (req, res, next) => {
  try {
    const logEntries = await LogEntry.find();
    console.log('logs...', logEntries || 'nothing...');
    res.json(logEntries);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(ValidationError);
    }
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdLogEntry = await logEntry.save();
    res.json(createdLogEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(ValidationError);
    }
    next(error);
  }
});

router.delete('/:log_id', async (req, res, next) => {
  try {
    await LogEntry.findByIdAndRemove({ _id: req.params.log_id });
    return res.json(`Log entry with id: ${req.params.log_id} is removed`);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
