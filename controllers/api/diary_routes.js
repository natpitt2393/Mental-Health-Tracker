// one route to get all diary entries GET /api/diary
//one route to get a single entry GET /api/diary/:id
// one route to submit a single entry POST /api/diary
//test
const router = require('express').Router();
const { Diary, Mood, User } = require('../../models');

// GET all Diary
// localhost:3001/api/diary
router.get('/', async (req, res) => {
  try {
    const diaryData = await Diary.findAll({
      include: [{ model: Mood }, { model: User }],
    });
    res.status(200).json(diaryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// localhost:3001/api/diary
router.post('/', async (req, res) => {
    const diaryData = await Diary.create(req.body);
  
    return res.json(diaryData);
  });

  
  // GET a single Diary
  // localhost:3001/api/diary/id
  router.get('/:id', async (req, res) => {
    try {
    const diaryData = await Diary.findByPk(req.params.id, {
      include: [{ model: Mood }, { model: User }],
    });

    if (!diaryData) {
      res.status(404).json({ message: 'diary not found' });
      return;
    }
    
    res.status(200).json(diaryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;