const { Category } = require('../models');

const categoryData =[
    {
        category_name: "Mindfulness"
    },
    {
        category_name: "Strength"
    },
    {
        category_name: "Cardio"
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;