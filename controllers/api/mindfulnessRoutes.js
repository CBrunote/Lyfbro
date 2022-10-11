const router = require('express').Router();
const { Mindfulness } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newMindfulness = await Mindfulness.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newMindfulness);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const mindfulnessData = await Mindfulness.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!mindfulnessData) {
        res.status(404).json({ message: 'No Mindfulness data found with this id!' });
        return;
      }
  
      res.status(200).json(mindfulnessData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;