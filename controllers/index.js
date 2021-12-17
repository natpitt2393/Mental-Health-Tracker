const router = require('express').Router();

const apiRoutes = require('./api');
const htmlRoutes = require('./html_routes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;


