const userCar = require('../models/userCars');

const carsData = [
    {
        make: 'make',
        model: 'model',
        year: 2006,
        engine_type: 'Gasoline',
        price: 6790
    },
]

const seedUserCars = () => userCar.bulkCreate(carsData);

module.exports = seedUserCars;