// ES6 For in Loop over a Object

var newCar = {
    color: "blue",
    seatColor: "black",
    brand: "Volvo",
    wheels: true,
    seats: 4
}

for (let props in newCar) {
    // console.log(newCar[props]);
    console.log(props + ": " + newCar[props]);
    // console.log(`${props}: ${newCar[props]}`);
}