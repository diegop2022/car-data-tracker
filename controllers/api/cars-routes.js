const router = require('express').Router();
const Cars = require('../../models/cars.js');

// "/api/cars" enpoint

// gets all cars using "/api/cars" endpoint 
router.get('/', (req, res) => {
    //find all cars
    Cars.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
})

// gets car by id using "/api/cars/:id" enpoint
router.get('/:id', (req, res) => {
    Cars.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//No need to add more routes as user will only be viewing the cars listed and comparing to their own car

module.exports = router;