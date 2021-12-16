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

//work on this later
Diary.hasOne(Mood, {
    foreignKey: 'diary_id',
    onDelete: 'CASCADE'
});


Mood.belongsTo(Diary, {
    foreignKey: 'mood_id'
});

module.exports = { User, Diary, Mood };