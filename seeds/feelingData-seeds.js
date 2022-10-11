const { Feeling } = require('../models');

const feelingData = [
    {
        feeling_name: "Worst"
    },
    {
        feeling_name: "Bad"
    },
    {
        feeling_name: "Neutral"
    },
    {
        feeling_name: "Good"
    },
    {
        feeling_name: "Best"
    }
];

const seedFeelings = () => Feeling.bulkCreate(feelingData);

module.exports = seedFeelings;