// one route to submit login data POST /api/login
const router = require('express').Router();
const User = require('../..models/User.js');

// localhost:3001/api/login
router.post('/', async (req, res) => {
    const userData = await User.create(req.body);
  
    return res.json(userData);
  });