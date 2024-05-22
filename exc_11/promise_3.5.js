const driveToGasStation = new Promise((resolve) => {
  resolve("Drive to gas station");
});
const fillTheCar = new Promise((resolve) => {
  resolve("Fill the car");
});
const driveToRestaurant = new Promise((resolve) => {
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
