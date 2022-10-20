const router = require('express').Router();
const { Strength, User, Mindfulness, Feeling, Cardio, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      res.render('homepage', { 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/activity', async (req, res) => {
    try {
      res.render('activity', { 
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    try {
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
    }
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  });


module.exports = router;