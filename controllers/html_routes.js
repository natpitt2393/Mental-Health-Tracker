// one to get homepage GET / 
//one for login/signup page GET /login
// diary entry page GET /submit
// one to show all entries /diary
// POSSIBLY one to show individual entries GET /entry
//test

const router = require('express').Router();
// const User = require('../models/User.js');
// const withAuth = require('../utils/auth.js');
const path = require('path');

// localhost:3001/
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.get('/diary', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/userDashboard.html"));
});

router.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/userDashboard.html'));
});


module.exports = router;