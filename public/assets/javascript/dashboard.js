const $createCar = document.querySelector('#create-car-form')
const createCarFormSubmit = event => {
    console.log('button working')
    event.preventDefault();
    //get Car data and organize it
    const make = $createCar.querySelector('[name="make"]').value;
    const model = $createCar.querySelector('[name="model"]').value;
    const year = parseInt($createCar.querySelector('[name="year"]').value);
    const engine = $createCar.querySelector('[name="engine"]').value;
    const price = parseInt($createCar.querySelector('[name="price"]').value);
    const carObj = { make, model, year, engine, price };
    console.log(carObj)
    fetch('api/usercar', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carObj)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            alert('Error: ' + response.statusText);
        })
        .then(postResponse => {
            console.log(postResponse);
            alert('Thank you for adding a Car!');
        });
}
$createCar.addEventListener('submit', createCarFormSubmit)