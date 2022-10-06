const Cars = require('../models/cars.js');

const carsData = [
    {
        make: 'Mazda',
        model: 'Miata',
        year: 2006,
        engine_type: 'Gasoline',
        price: 6790
    },
    {
        make: 'Toyota',
        model: 'Corolla',
        year: 2010,
        engine_type: 'Gasoline',
        price: 7740
    },
    {
        make: 'Tesla',
        model: 'Model S',
        year: 2018,
        engine_type: 'Electric',
        price: 59602
    },
    {
        make: 'Toyota',
        model: 'Prius',
        year: 2018,
        engine_type: 'Hybrid',
        price: 23873
    },
    {
        make: 'Honda',
        model: 'CRV',
        year: 2002,
        engine_type: 'Gasoline',
        price: 4285
    }
]

const seedCars = () => Cars.bulkCreate(carsData);

module.exports = seedCars;