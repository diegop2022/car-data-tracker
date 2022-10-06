const seedCars = require('./car-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n')
    await seedCars();
    console.log('\n----- CARS SEEDED -----\n')

    process.exit(0);
};

seedAll()