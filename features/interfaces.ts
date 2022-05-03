// You can use any type inside interface, you cand express functions
interface Reportable {
  summary(): string;
}

const oldCivid = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  //   console.log(`Name: ${vehicle.name}`);
  //   console.log(`Year: ${vehicle.year}`);
  //   console.log(`Broken? ${vehicle.broken}`);
  console.log(item.summary());
};

printSummary(oldCivid);
printSummary(drink);
