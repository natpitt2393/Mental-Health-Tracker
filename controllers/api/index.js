const router = require('express').Router();

const diaryRoutes = require('./diary_routes');
const loginRoutes = require('./login_routes');

router.use('/login', loginRoutes);
router.use('/diary', diaryRoutes);

module.exports = router;
