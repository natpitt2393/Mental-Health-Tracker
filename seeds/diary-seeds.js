const Diary = require('../models/Diary');
//test
const diaryData = [
  {
    title: 'Worstggggggggg Day Ever',
    description: "descrip",
    mood_id: 1,
    user_id: 1,
    date_created: "12/12/1212"
  },
  {
    title: 'Worstggggggggg Day Ever',
    description: "descrip",
    mood_id: 3,
    user_id: 3,
    date_created: "12/12/1212"
  },
  {
    title: 'Worstggggggggg Day Ever',
    description: "descrip",
    mood_id: 5,
    user_id: 2,
    date_created: "12/12/1212"
  },
  {
    title: 'Worstggggggggg Day Ever',
    description: "descrip",
    mood_id: 7,
    user_id: 3,
    date_created: "12/12/1212"
  },
  {
    title: 'Worstggggggggg Day Ever',
    description: "descrip",
    mood_id: 9,
    user_id: 2,
    date_created: "12/12/1212"
  }
];

const seedDiary = () => Diary.bulkCreate(diaryData);

module.exports = seedDiary;