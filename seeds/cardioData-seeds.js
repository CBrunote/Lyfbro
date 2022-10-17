const { Cardio } = require('../models');

const cardioData = [
    {
      date: 1665619200,
      time_spent: 30,
      category_id: 3,
      feeling_id: 1,
      user_id: 1
    },
    {
      date: 1665619200,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 2 
    },
    {
      date: 1665619200,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 3
    },
    {
      date: 1665619200,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 4
    },
    {
      date: 1665619200,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1665619200,
      time_spent: 20,
      category_id: 3,
      feeling_id: 3,
      user_id: 6
    },
    {
      date: 1665705600,
      time_spent: 30,
      category_id: 3,
      feeling_id: 1,
      user_id: 6
    },
    {
      date: 1665705600,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 5 
    },
    {
      date: 1665705600,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 4
    },
    {
      date: 1665705600,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 3
    },
    {
      date: 1665705600,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 2
    },
    {
      date: 1665705600,
      time_spent: 20,
      category_id: 3,
      feeling_id: 3,
      user_id: 1
    },
    {
      date: 1665792000,
      time_spent: 30,
      category_id: 3,
      feeling_id: 1,
      user_id: 2
    },
    {
      date: 1665792000,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 1 
    },
    {
      date: 1665792000,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 6
    },
    {
      date: 1665792000,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 4
    },
    {
      date: 1665792000,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1665792000,
      time_spent: 20,
      category_id: 3,
      feeling_id: 3,
      user_id: 3
    },
    {
      date: 1665878400,
      time_spent: 30,
      category_id: 3,
      feeling_id: 1,
      user_id: 3
    },
    {
      date: 1665878400,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 2 
    },
    {
      date: 1665878400,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 1
    },
    {
      date: 1665878400,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 6
    },
    {
      date: 1665878400,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1665878400,
      time_spent: 20,
      category_id: 3,
      feeling_id: 3,
      user_id: 4
    },
    {
      date: 1665964800,
      time_spent: 30,
      category_id: 3,
      feeling_id: 1,
      user_id: 3
    },
    {
      date: 1665964800,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 2 
    },
    {
      date: 1665964800,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 1
    },
    {
      date: 1665964800,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 6
    },
    {
      date: 1665964800,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1665964800,
      time_spent: 20,
      category_id: 3,
      feeling_id: 3,
      user_id: 4
    },
    {
      date: 1666051200,
      time_spent: 30,
      category_id: 3,
      feeling_id: 1,
      user_id: 6
    },
    {
      date: 1666051200,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 5 
    },
    {
      date: 1666051200,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 4
    },
    {
      date: 1666051200,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 3
    },
    {
      date: 1666051200,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 2
    },
    {
      date: 1666051200,
      time_spent: 20,
      category_id: 3,
      feeling_id: 3,
      user_id: 1
    },
    {
      date: 1666137600,
      time_spent: 30,
      category_id: 3,
      feeling_id: 1,
      user_id: 1
    },
    {
      date: 1666137600,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 2 
    },
    {
      date: 1666137600,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 3
    },
    {
      date: 1666137600,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 4
    },
    {
      date: 1666137600,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1666137600,
      time_spent: 20,
      category_id: 3,
      feeling_id: 3,
      user_id: 6
    }
  ];

const seedCardio = () => Cardio.bulkCreate(cardioData);

module.exports = { seedCardio };