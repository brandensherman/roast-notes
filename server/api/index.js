const router = require('express').Router();

router.use('/admin', require('./admin'));
router.use('/user', require('./user'));
router.use('/auth', require('./auth'));

module.exports = router;
