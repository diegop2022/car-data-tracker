const $createCar = document.querySelector('#create-car-form')

const createCarFormSubmit = event => {
    event.preventDefault();

    //get Car data and organize it
    const make = $createCar.querySelector('[name="make"]').value;
    const model = $createCar.querySelector('[name="model"]').value;
    const year = parseInt($createCar.querySelector('[name="year"]').value);
    const engine = $createCar.querySelector('[name="engine"]').value;
    const price = parseInt($createCar.querySelector('[name="price"]').value);

    const carObj = { make, model, year, engine, price };
    console.log(carObj)
    fetch('api/usercar')
}

$createCar.addEventListener('submit', createCarFormSubmit)