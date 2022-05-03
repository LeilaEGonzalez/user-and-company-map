class Vehicle {
  constructor(public color: string) {} //modifiers can be used in properties/fields, methods/classes

  protected drive(): void {
    console.log("something");
  }
  //   public honk(): void {
  //     console.log("else");
  //   }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

//You can't change modifier in child class
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private honk(): void {
    console.log("more");
  }
  startDrivingProcess(): void {
    this.honk();
    this.drive();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
