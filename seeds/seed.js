const seedCategories = require('./categoryData-seeds');
const seedCardio = require('./cardioData-seeds');
const seedFeelings = require('./feelingData-seeds');
const seedMindfulness = require('./mindfulnessData-seeds');
const seedStrength = require('./strengthData-seeds');
const seedUsers = require('./userData-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USER DATA SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedFeelings();
  console.log('\n----- FEELINGS SEEDED -----\n');

  await seedCardio();
  console.log('\n----- CARDIO DATA SEEDED -----\n');

  await seedStrength();
  console.log('\n----- STRENGTH DATA SEEDED -----\n');

  await seedMindfulness();
  console.log('\n----- MINDFULNESS DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();
