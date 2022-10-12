const router = require('express').Router();
const userCars = require('../../models/userCars');

// gets all the user's cars using "/api/usercar" endpoint 
router.get('/', (req, res) => {
    //find the user's cars
    userCars.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    userCars.create({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        engine_type: req.body.engine_type,
        price: req.body.price
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;
