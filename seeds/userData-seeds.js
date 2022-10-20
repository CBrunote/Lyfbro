const { User } = require('../models');

const userData = [
  {
    email: "mnghinguyen@github.com",
    password: "pikachu1"
  },
  {
    email: "Verzo361219@github.com",
    password: "pikachu1"
  },
  {
    email: "bp4924@github.com",
    password: "pikachu1"
  },
  {
    email: "nickhufler1@github.com",
    password: "pikachu1"
  },
  {
    email: "cbrunote@github.com",
    password: "pikachu1"
  },
  {
    email: "garethtflynn@github.com",
    password: "pikachu1"
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
  