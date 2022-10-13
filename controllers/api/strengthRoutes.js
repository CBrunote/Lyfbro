const router = require('express').Router();
const { Strength } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const strengthData = await Strength.findAll();
    res.status(200).json(strengthData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const strengthData = await Strength.findByPk(req.params.id);
    if (!strengthData) {
      res.status(404).json({ message: 'No Strength Data found with this ID!'});
      return;
    }
    res.status(200).json(strengthData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const strengthData = await Strength.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!strengthData[0]) {
      res.status(404).json({ message: 'No Strength data found with this id!'});
      return;
    }
    res.status(200).json(strengthData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      const newStrength = await Strength.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newStrength);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const strengthData = await Strength.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!strengthData) {
        res.status(404).json({ message: 'No strength data found with this id!' });
        return;
      }
  
      res.status(200).json(strengthData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;