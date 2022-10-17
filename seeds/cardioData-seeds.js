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
      date: 1665619201,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 2 
    },
    {
      date: 1665619202,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 3
    },
    {
      date: 1665619203,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 4
    },
    {
      date: 1665619204,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1665619205,
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
      date: 1665705601,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 5 
    },
    {
      date: 1665705602,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 4
    },
    {
      date: 1665705603,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 3
    },
    {
      date: 1665705604,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 2
    },
    {
      date: 1665705605,
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
      date: 1665792001,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 1 
    },
    {
      date: 1665792002,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 6
    },
    {
      date: 1665792003,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 4
    },
    {
      date: 1665792004,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1665792005,
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
      date: 1665878401,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 2 
    },
    {
      date: 1665878402,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 1
    },
    {
      date: 1665878403,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 6
    },
    {
      date: 1665878404,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1665878405,
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
      date: 1665964801,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 2 
    },
    {
      date: 1665964802,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 1
    },
    {
      date: 1665964803,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 6
    },
    {
      date: 1665964804,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1665964805,
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
      date: 1666051201,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 5 
    },
    {
      date: 1666051202,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 4
    },
    {
      date: 1666051203,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 3
    },
    {
      date: 1666051204,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 2
    },
    {
      date: 1666051205,
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
      date: 1666137601,
      time_spent: 20,
      category_id: 3,
      feeling_id: 2,
      user_id: 2 
    },
    {
      date: 1666137602,
      time_spent: 15,
      category_id: 3,
      feeling_id: 3,
      user_id: 3
    },
    {
      date: 1666137603,
      time_spent: 25,
      category_id: 3,
      feeling_id: 4,
      user_id: 4
    },
    {
      date: 1666137604,
      time_spent: 20,
      category_id: 3,
      feeling_id: 5,
      user_id: 5
    },
    {
      date: 1666137605,
      time_spent: 20,
      category_id: 3,
      feeling_id: 3,
      user_id: 6
    }
  ];

const seedCardio = () => Cardio.bulkCreate(cardioData);

module.exports = seedCardio;