/* 
A few notes about this setup:
- index.html first loads classes.js then loads script.js
- the classes.js file exports the classes ParkingLot, Car, and Bus
- this file imports those classes
*/

import { ParkingLot, Car, Bus } from './classes.js'

const lot = new ParkingLot(3, 5);
const car1 = new Car("12345");
const car2 = new Car("23456");
const bus = new Bus("56789");

car1.requestParkingSpot(lot);
car2.requestParkingSpot(lot);
bus.requestParkingSpot(lot);

console.log(lot);
console.log(car1);
console.log(car2);
console.log(bus);

car2.leaveParkingSpot()
bus.leaveParkingSpot()

console.log(car2);
console.log(bus);
console.log(lot);