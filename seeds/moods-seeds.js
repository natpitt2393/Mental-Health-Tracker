const Mood = require('../models/Mood');

const moodData = [
  {
    id: 1,
    title: 'worst day ever',
    value: 1,
    color: "black"
  },
  {
    id: 2,
    title: 'really bad',
    value: 2,
    color: "darkred"
  },
  {
    id: 3,
    title: 'sad',
    value: 3,
    color: 'red'
  },
  {
    id: 4,
    title: 'not good',
    value: 4,
    color: 'orange'
  },
  {
    id: 5,
    title: 'fine',
    value: 5,
    color: 'yellow'
  },
  {
      id: 6,
      title: 'pretty good',
      value: 6,
      color: "darkgreen"
  },
  {
      id: 7,
      title: "good",
      value: 7,
      color: "green"
  },
  {
      id: 8,
      title: "happy",
      value: 8,
      color: "light green"
  },
  {
      id: 9,
      title: "elated",
      value: 9,
      color: 'neon green'
  },
  {
      id: 10,
      title: 'best day ever',
      value: 10,
      color: 'pink'
  }
];

const seedMoods = () => Mood.bulkCreate(moodData);

module.exports = seedMoods;