const { Strength } = require('../models');

const strengthData = [
  {
    date: "2022-10-13",
    time_spent: 30,
    category_id: 2,
    feeling_id: 1,
    user_id: 1
  },
  {
    date: "2022-10-13",
    time_spent: 20,
    category_id: 2,
    feeling_id: 2,
    user_id: 2 
  },
  {
    date: "2022-10-13",
    time_spent: 15,
    category_id: 2,
    feeling_id: 3,
    user_id: 3
  },
  {
    date: "2022-10-13",
    time_spent: 25,
    category_id: 2,
    feeling_id: 4,
    user_id: 4
  },
  {
    date: "2022-10-13",
    time_spent: 20,
    category_id: 2,
    feeling_id: 5,
    user_id: 5
  },
  {
    date: "2022-10-13",
    time_spent: 20,
    category_id: 2,
    feeling_id: 3,
    user_id: 6
  },
  {
    date: "2022-10-14",
    time_spent: 30,
    category_id: 2,
    feeling_id: 1,
    user_id: 6
  },
  {
    date: "2022-10-14",
    time_spent: 20,
    category_id: 2,
    feeling_id: 2,
    user_id: 5 
  },
  {
    date: "2022-10-14",
    time_spent: 15,
    category_id: 2,
    feeling_id: 3,
    user_id: 4
  },
  {
    date: "2022-10-14",
    time_spent: 25,
    category_id: 2,
    feeling_id: 4,
    user_id: 3
  },
  {
    date: "2022-10-14",
    time_spent: 20,
    category_id: 2,
    feeling_id: 5,
    user_id: 2
  },
  {
    date: "2022-10-14",
    time_spent: 20,
    category_id: 2,
    feeling_id: 3,
    user_id: 1
  },
  {
    date: "2022-10-15",
    time_spent: 30,
    category_id: 2,
    feeling_id: 1,
    user_id: 2
  },
  {
    date: "2022-10-15",
    time_spent: 20,
    category_id: 2,
    feeling_id: 2,
    user_id: 1 
  },
  {
    date: "2022-10-15",
    time_spent: 15,
    category_id: 2,
    feeling_id: 3,
    user_id: 6
  },
  {
    date: "2022-10-15",
    time_spent: 25,
    category_id: 2,
    feeling_id: 4,
    user_id: 4
  },
  {
    date: "2022-10-15",
    time_spent: 20,
    category_id: 2,
    feeling_id: 5,
    user_id: 5
  },
  {
    date: "2022-10-15",
    time_spent: 20,
    category_id: 2,
    feeling_id: 3,
    user_id: 3
  },
  {
    date: "2022-10-16",
    time_spent: 30,
    category_id: 2,
    feeling_id: 1,
    user_id: 3
  },
  {
    date: "2022-10-16",
    time_spent: 20,
    category_id: 2,
    feeling_id: 2,
    user_id: 2 
  },
  {
    date: "2022-10-16",
    time_spent: 15,
    category_id: 2,
    feeling_id: 3,
    user_id: 1
  },
  {
    date: "2022-10-16",
    time_spent: 25,
    category_id: 2,
    feeling_id: 4,
    user_id: 6
  },
  {
    date: "2022-10-16",
    time_spent: 20,
    category_id: 2,
    feeling_id: 5,
    user_id: 5
  },
  {
    date: "2022-10-16",
    time_spent: 20,
    category_id: 2,
    feeling_id: 3,
    user_id: 4
  },
  {
    date: "2022-10-17",
    time_spent: 30,
    category_id: 2,
    feeling_id: 1,
    user_id: 3
  },
  {
    date: "2022-10-17",
    time_spent: 20,
    category_id: 2,
    feeling_id: 2,
    user_id: 2 
  },
  {
    date: "2022-10-17",
    time_spent: 15,
    category_id: 2,
    feeling_id: 3,
    user_id: 1
  },
  {
    date: "2022-10-17",
    time_spent: 25,
    category_id: 2,
    feeling_id: 4,
    user_id: 6
  },
  {
    date: "2022-10-17",
    time_spent: 20,
    category_id: 2,
    feeling_id: 5,
    user_id: 5
  },
  {
    date: "2022-10-17",
    time_spent: 20,
    category_id: 2,
    feeling_id: 3,
    user_id: 4
  },
  {
    date: "2022-10-18",
    time_spent: 30,
    category_id: 2,
    feeling_id: 1,
    user_id: 6
  },
  {
    date: "2022-10-18",
    time_spent: 20,
    category_id: 2,
    feeling_id: 2,
    user_id: 5 
  },
  {
    date: "2022-10-18",
    time_spent: 15,
    category_id: 2,
    feeling_id: 3,
    user_id: 4
  },
  {
    date: "2022-10-18",
    time_spent: 25,
    category_id: 2,
    feeling_id: 4,
    user_id: 3
  },
  {
    date: "2022-10-18",
    time_spent: 20,
    category_id: 2,
    feeling_id: 5,
    user_id: 2
  },
  {
    date: "2022-10-18",
    time_spent: 20,
    category_id: 2,
    feeling_id: 3,
    user_id: 1
  },
  {
    date: "2022-10-19",
    time_spent: 30,
    category_id: 2,
    feeling_id: 1,
    user_id: 1
  },
  {
    date: "2022-10-19",
    time_spent: 20,
    category_id: 2,
    feeling_id: 2,
    user_id: 2 
  },
  {
    date: "2022-10-19",
    time_spent: 15,
    category_id: 2,
    feeling_id: 3,
    user_id: 3
  },
  {
    date: "2022-10-19",
    time_spent: 25,
    category_id: 2,
    feeling_id: 4,
    user_id: 4
  },
  {
    date: "2022-10-19",
    time_spent: 20,
    category_id: 2,
    feeling_id: 5,
    user_id: 5
  },
  {
    date: "2022-10-19",
    time_spent: 20,
    category_id: 2,
    feeling_id: 3,
    user_id: 6
  }
];

const seedStrength = () => Strength.bulkCreate(strengthData);

module.exports = seedStrength;
