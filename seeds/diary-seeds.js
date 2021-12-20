const Diary = require('../models/Diary');
//test
const diaryData = [
  {
    title: 'Worstggggggggg Day Ever',
    description: "descrip",
    mood_id: 1,
    date_created: "12/12/1212"
  }
];

const seedDiary = () => Diary.bulkCreate(diaryData);

module.exports = seedDiary;