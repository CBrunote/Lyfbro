const router = require('express').Router();
const { Mindfulness } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const mindfulnessData = await Mindfulness.findAll();
    res.status(200).json(mindfulnessData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:user_id', async (req, res) => {
  try {
    const mindfulnessData = await Mindfulness.findAll({where: {user_id: req.params.user_id}});
    if (!mindfulnessData) {
      res.status(404).json({ message: 'No Mindfulness Data found with this ID!'});
      return;
    }
    res.status(200).json(mindfulnessData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:user_id/:id', async (req, res) => {
  try {
    const mindfulnessData = await Mindfulness.findAll({where: {user_id: req.params.user_id, id:req.params.id}});
    if (!mindfulnessData) {
      res.status(404).json({ message: 'No Mindfulness Data found with this User ID!'});
      return;
    }
    res.status(200).json(mindfulnessData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id/:user_id', withAuth, async (req, res) => {
  try {
    const mindfulnessData = await Mindfulness.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.params.user_id
      }
    });
    if (!mindfulnessData[0]) {
      res.status(404).json({ message: 'No Mindfulness Data found with this id!'});
      return;
    }
    res.status(200).json(mindfulnessData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
    const body = req.body
    try {
      const newMindfulness = await Mindfulness.create({
        ...body,
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