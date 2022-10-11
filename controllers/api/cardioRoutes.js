const router = require('express').Router();
const { Cardio } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newCardio = await Cardio.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newCardio);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const cardioData = await Cardio.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!cardioData) {
        res.status(404).json({ message: 'No Cardio data found with this id!' });
        return;
      }
  
      res.status(200).json(cardioData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;