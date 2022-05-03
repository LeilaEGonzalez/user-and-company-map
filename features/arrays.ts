const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];
// if you don't know what it will be in this variable you put
//const carsByMake: string [][] = [];

//Extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(10);

//Help with 'map', 'forEach' or 'reduce'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
