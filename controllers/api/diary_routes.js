const router = require('express').Router();
const { Diary, Mood, User } = require('../../models');

const withAuth = require('../../utils/auth');

// GET all Diary
// localhost:3001/api/diary
router.get('/',withAuth, async (req, res) => {
  // console.log("GET /api/diary");
  // console.log(req.session.id);
  try {
    const diaryData = await Diary.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(diaryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// localhost:3001/api/diary
router.post('/', withAuth, async (req, res) => {
    const diaryData = await Diary.create(req.body);
  
    return res.json(diaryData);
  });

  
  // GET a single Diary
  // localhost:3001/api/diary/:id
  router.get('/:id', withAuth,  async (req, res) => {//view is arbitrary could be anything
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