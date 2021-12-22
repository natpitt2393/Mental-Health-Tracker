const router = require("express").Router();
const Diary = require("../../models/Diary.js");
const withAuth = require("../../utils/auth.js");
//localhost:3001/api/create
router.post("/", withAuth, async (req, res) => {
  // console.log(req.body);
  try {
    const diaryData = await Diary.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(diaryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
