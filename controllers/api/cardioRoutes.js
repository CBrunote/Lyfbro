const router = require('express').Router();
const { Cardio } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
    const cardioData = await Cardio.findAll();
    res.status(200).json(cardioData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:user_id', async (req, res) => {
  try {
    const cardioData = await Cardio.findAll({where: {user_id: req.params.user_id}});
    if (!cardioData) {
      res.status(404).json({ message: 'No Cardio Data found with this User ID!'});
      return;
    }
    res.status(200).json(cardioData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:user_id/:id', async (req, res) => {
  try {
    const cardioData = await Cardio.findAll({where: {user_id: req.params.user_id, id:req.params.id}});
    if (!cardioData) {
      res.status(404).json({ message: 'No Cardio Data found with this User ID!'});
      return;
    }
    res.status(200).json(cardioData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:user_id', async (req, res) => {
  try {
    const cardioData = await Cardio.findAll(req.params.user_id);
    if (!cardioData) {
      res.status(404).json({ message: 'No Cardio Data found with this User ID!'});
      return;
    }
    res.status(200).json(cardioData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id/:user_id', withAuth, async (req, res) => {
  try {
    const cardioData = await Cardio.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.params.user_id
      }
    });
    if (!cardioData[0]) {
      res.status(404).json({ message: 'No Cardio Data found with this id!'});
      return;
    }
    res.status(200).json(cardioData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
    const body = req.body
    try {
      const newCardio = await Cardio.create({
        ...body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newCardio);
    } catch (err) {
    
      res.status(400).json(err);
      console.log(err)
    }
});

router.delete('/:user_id', withAuth, async (req, res) => {
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