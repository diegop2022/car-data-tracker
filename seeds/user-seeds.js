const user = require('../models/user');

const userData = [
    {
        username: 'John Doe',
        email: 'John@example.com',
        // password = 'pass'
        password: '$2b$10$R.XPrZa68kU/IHp1oqUPpuwW58USxiKvhLfqTl.e/oQup1MkzeWrG'
    }
]

const seedUser = () => user.bulkCreate(userData);

module.exports = seedUser;