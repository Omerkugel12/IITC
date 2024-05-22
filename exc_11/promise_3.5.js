const driveToGasStation = new Promise((resolve, reject) => {
  resolve("Drive to gas station");
});
const fillTheCar = new Promise((resolve, reject) => {
  resolve("Fill the car");
});
const driveToRestaurant = new Promise((resolve, reject) => {
  resolve("Drive to restaurant");
});

driveToGasStation.then((message) => {
  console.log(message);
  return fillTheCar.then((message) => {
    console.log(message);
    return driveToRestaurant.then((message) => {
      console.log(message);
    });
  });
});
