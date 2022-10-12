const user = require('../models/user');

const userData = [
    {
        username: 'John Doe',
        email: 'John@example.com',
        password: '1234'
    }
]

const seedUser = () => user.bulkCreate(userData);

module.exports = seedUser;