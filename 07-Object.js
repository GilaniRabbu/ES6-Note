// ES6 Object

var cars = {
    color: "blue",
    brand: "Volvo",
    wheels: true,
    mileage: "199",
    seats: "5",
    tankVolume: "70"
}

console.log(cars["seats"]);

var car = {
    carColor: {
        color: "black",
        seatColor: "blue",
        tireColor: "brown"
    },
    carDetail: {
        brand: "BMW",
        seat: "4",
        mileage: "180",
        price: "$39,795",
        rating: "8.5",
        wheels: true
    }
}

console.log(car["carDetail"]["price"]);