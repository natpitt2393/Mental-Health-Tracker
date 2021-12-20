const User = require('./User');
const Diary = require('./Diary');
const Mood = require('./Mood');

User.hasMany(Diary, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Diary.belongsTo(User, {
  foreignKey: 'user_id'
});

// diary hasone mood or mood belongs to diary
Diary.hasOne(Mood, {
    foreignKey: 'mood_id'
});

//Mood.belongsTo(Diary, {
  //  foreignKey: 'mood_id'
//});

module.exports = { User, Diary, Mood };