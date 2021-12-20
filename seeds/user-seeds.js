const {User} = require('../models');
const userData = [
    {
        name: "Al",
        email: "al@email.com",
        password: "password"
    },
    {
        name: "Bee",
        email: "bee@email.com",
        password: "password"
    },
    {
        name: "Cindy",
        email: "cindy@email.com",
        password: "password"
    }
]
const seedUsers = () => User.bulkCreate(userData, { //Uses hooks and encrypts
    individualHooks: true
});

module.exports = seedUsers;