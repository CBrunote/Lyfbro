const router = require('express').Router();
const { Strength } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
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

router.delete('/:id', withAuth, async (req, res) => {
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