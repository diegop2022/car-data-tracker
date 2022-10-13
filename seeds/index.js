const seedCars = require('./car-seeds');
const seedUserCars = require('./user_car-seed')
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n')
    await seedUser();
    console.log('\n----- USER SEEDED -----\n')
    await seedCars();
    console.log('\n----- CARS SEEDED -----\n')
    await seedUserCars('\n----- USERCARS SYNCED -----\n')

    process.exit(0);
};

seedAll()