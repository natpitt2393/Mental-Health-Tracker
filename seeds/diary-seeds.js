const Diary = require('../models/Diary');
//test
const diaryData = [
  {
    title: 'This the title',
    description: "This is the description",
    mood_id: 1,
    user_id: 1,
    date_created: "12/12/1212"
  },
  {
    title: 'Title 2',
    description: "This is the body of the description its full of text",
    mood_id: 3,
    user_id: 3,
    date_created: "12/12/1212"
  },
  {
    title: 'This is some other title',
    description: "We are stuck on somethings",
    mood_id: 5,
    user_id: 2,
    date_created: "12/12/1212"
  },
  {
    title: 'This sucks',
    description: "this is the body again of something",
    mood_id: 7,
    user_id: 3,
    date_created: "12/12/1212"
  },
  {
    title: 'I hate this',
    description: "descrip",
    mood_id: 9,
    user_id: 2,
    date_created: "12/12/1212"
  }
];

const seedDiary = () => Diary.bulkCreate(diaryData);

module.exports = seedDiary;