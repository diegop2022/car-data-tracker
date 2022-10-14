async function createDisplay() {
    fetch('/api/cars')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const displayText = document.createElement('h2');
        displayText.textContent = "Compare to a number of cars including:";
        document.body.appendChild(displayText);
        const carsContainer = document.createElement('section');
        carsContainer.classList.add('carCards');
        document.body.appendChild(carsContainer);
        data.forEach(car => {
            console.log(car.model);
            const card = document.createElement('div');
            //const carImg = document.createElement('img');
            const carInfo = document.createElement('div');
            const makeEl = document.createElement('h3');
            const modelEl = document.createElement('h3');
            const yearEl = document.createElement('h3');
            const engineEl = document.createElement('h3');
            const priceEl = document.createElement('h3');
            card.classList.add('car');
            carInfo.classList.add('carInfo');
            carsContainer.appendChild(card);
            card.appendChild(carInfo)
            carInfo.appendChild(makeEl);
            carInfo.appendChild(modelEl);
            carInfo.appendChild(yearEl);
            carInfo.appendChild(engineEl);
            carInfo.appendChild(priceEl);
            makeEl.textContent = "Make: " + car.make;
            modelEl.textContent = "Model: " + car.model;
            yearEl.textContent = "Year: " + car.year;
            engineEl.textContent = "Engine: " + car.engine_type;
            priceEl.textContent = "Price: " + car.price;
        })
    })
  }

  createDisplay();