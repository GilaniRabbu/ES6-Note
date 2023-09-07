// ES6 Decision Making

var newCar = {
    color: "blue",
    seatColor: "black",
    brand: "Volvo",
    wheels: true,
    seats: 4
}

if (newCar["seats"] == 5) {
    console.log("Car have a 5 seat");
}
else if (newCar["seats"] == 6) {
    console.log("Car have a 6 seat");
}
else {
    console.log("Car have a 4 seat");
}