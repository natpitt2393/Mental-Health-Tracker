const Mood = require('../models/Mood');
const moodData = [
  {
    title: 'Worst Day Ever',
    value: 1,
    color: "black"
  },
  {
    title: 'Really Bad',
    value: 2,
    color: "darkred"
  },
  {
    title: 'Sad',
    value: 3,
    color: 'red'
  },
  {
    title: 'Not Good',
    value: 4,
    color: 'orange'
  },
  {
    title: 'Adequate',
    value: 5,
    color: 'yellow'
  },
  {
      title: 'Pretty Good',
      value: 6,
      color: "darkgreen"
  },
  {
      title: "Good",
      value: 7,
      color: "green"
  },
  {
      title: "Happy",
      value: 8,
      color: "light green"
  },
  {
      title: "Elated",
      value: 9,
      color: 'neon green'
  },
  {
      title: 'Best Day Ever',
      value: 10,
      color: 'pink'
  }
];

const seedMoods = () => Mood.bulkCreate(moodData);

module.exports = seedMoods;