const userCar = require ('./userCars'); 
const cars = require('./cars'); 

userCar.hasMany(cars, {
    foreignKey: 'user_id'
}); 

cars.belongsTo(userCar, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}); 

module.exports = {
    userCar,
    cars
}; 