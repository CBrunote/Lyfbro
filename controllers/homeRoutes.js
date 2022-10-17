const router = require('express').Router();
const { Cardio, Category, Feeling, Mindfulness, Strength, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      res.render('homepage', { 
        // projects, 
        // logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;