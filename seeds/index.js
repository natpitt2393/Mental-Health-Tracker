const seedMoods = require("./moods-seeds");
const seedDiary = require("./diary-seeds");
const seedUsers = require("./user-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  // console.log("**********DATABASE SYNCED ************");
  await seedUsers();
  await seedMoods();
  // console.log("*************MOODS SYNCED**********");
  await seedDiary();
  // console.log("************** DIARY SEEDED");
  process.exit(0);
};

seedAll();
