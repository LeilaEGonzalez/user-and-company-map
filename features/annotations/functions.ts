// Arrow Func
const add = (a: number, b: number): number => {
  return a + b;
};

// Name Func
function divide(a: number, b: number): number {
  return a / b;
}

// Asigned-Anon Func
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void Func: can return null/undefined
const logger = (message: string): void => {
  console.log(message);
};

// Never Func: ONLY used when you don't want ANYTHING returned from a func
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

//
