const router = require('express').Router();
const carRoutes = require('./cars-routes');
const userCarRoute = require('./user-car-routes');

router.use('/cars', carRoutes)
router.use('/usercar', userCarRoute)

module.exports = router;