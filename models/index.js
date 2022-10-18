const User = require('./User');
const Category = require('./Category');
const Cardio = require('./Cardio');
const Feeling = require('./Feeling');
const Mindfulness = require('./Mindfulness');
const Strength = require('./Strength');

//Category
Cardio.belongsTo(Category, {
  foreignKey: 'category_id'
});

Strength.belongsTo(Category, {
    foreignKey: 'category_id'
});

Mindfulness.belongsTo(Category, {
    foreignKey: 'category_id'
});


Category.hasMany(Cardio, {
    foreignKey: 'category_id'
})

Category.hasMany(Feeling, {
    foreignKey: 'category_id'
})

Category.hasMany(Mindfulness, {
    foreignKey: 'category_id'
})

//Feeling

Cardio.belongsTo(Feeling, {
    foreignKey: 'feeling_id'
  });
  
Strength.belongsTo(Feeling, {
    foreignKey: 'feeling_id'
});

Mindfulness.belongsTo(Feeling, {
    foreignKey: 'feeling_id'
});
  

Feeling.hasMany(Cardio, {
    foreignKey: 'feeling_id'
})

Feeling.hasMany(Strength, {
    foreignKey: 'feeling_id'
})

Feeling.hasMany(Mindfulness, {
    foreignKey: 'feeling_id'
})

//Users

Cardio.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Strength.belongsTo(User, {
    foreignKey: 'user_id'
});

Mindfulness.belongsTo(User, {
    foreignKey: 'user_id'
});
  

User.hasMany(Cardio, {
    foreignKey: 'user_id'
})

User.hasMany(Strength, {
    foreignKey: 'user_id'
})

User.hasMany(Mindfulness, {
    foreignKey: 'user_id'
})


module.exports = {
  User,
  Category,
  Cardio,
  Feeling,
  Mindfulness,
  Strength
};