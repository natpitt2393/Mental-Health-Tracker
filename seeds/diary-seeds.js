const Diary = require('../models/Diary');
const diaryData = [
  {
    title: 'User 1',
    description: "This is the description",
    mood_id: 1,
    user_id: 1,
    date_created: "12/12/1212"
  },
  {
    title: 'User 3 ',
    description: "This is the body of the description its full of text",
    mood_id: 3,
    user_id: 3,
    date_created: "12/12/1212"
  },
  {
    title: 'User 2',
    description: "We are stuck on somethings",
    mood_id: 5,
    user_id: 2,
    date_created: "12/12/1212"
  },
  {
    title: 'User 3',
    description: "this is the body again of something",
    mood_id: 7,
    user_id: 3,
    date_created: "12/12/1212"
  },
  {
    title: 'User 2',
    description: "descrip",
    mood_id: 9,
    user_id: 2,
    date_created: "12/12/1212"
  }
];

const seedDiary = () => Diary.bulkCreate(diaryData);

module.exports = seedDiary;