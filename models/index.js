const User = require('./User');
const Diaries = require('./Diaries');

User.hasMany(Diaries, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Diaries.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Diaries };