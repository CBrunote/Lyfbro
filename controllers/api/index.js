const router = require('express').Router();
const userRoutes = require('./userRoutes');
const feelingRoutes = require('./feelingRoutes');
const mindfulnessRoutes = require('./mindfulnessRoutes');
const strengthRoutes = require('./strengthRoutes');
const cardioRoutes = require('./cardioRoutes');

router.use('/users', userRoutes);
router.use('/strength', strengthRoutes);
router.use('/feeling', feelingRoutes);
router.use('/mindfulness', mindfulnessRoutes);
router.use('/cardio', cardioRoutes);


module.exports = router;