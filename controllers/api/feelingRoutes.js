const router = require('express').Router();
const { Feeling } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newFeeling = await Feeling.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newFeeling);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const feelingData = await Feeling.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!feelingData) {
        res.status(404).json({ message: 'No Feeling data found with this id!' });
        return;
      }
  
      res.status(200).json(feelingData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;