const User = require('./User');
const Diary = require('./Diary');
const Mood = require('./Mood');

User.hasMany(Diary, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Diary.belongsTo(Mood, {
    foreignKey: 'mood_id'
});

Mood.hasOne(Diary, {
   foreignKey: 'mood_id'
});

module.exports = { User, Diary, Mood };