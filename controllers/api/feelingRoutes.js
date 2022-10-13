const router = require('express').Router();
const { Feeling } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const feelingData = await Feeling.findAll();
    res.status(200).json(feelingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const feelingData = await Feeling.findByPk(req.params.id);
    if (!feelingData) {
      res.status(404).json({ message: 'No Feeling Data found with this ID!'});
      return;
    }
    res.status(200).json(feelingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;