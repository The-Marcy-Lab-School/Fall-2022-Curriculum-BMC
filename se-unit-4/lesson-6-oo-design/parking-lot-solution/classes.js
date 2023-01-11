/* 
Parking Lot
- Properties
  - rows: number
  - columns: number
  - spotsAvailable: number
  - parkingSpots: 2D Array of Parking Spots
- Methods
  - spotIsAvailable(r, c)
  - getAvailableParkingSpotFor(vehicle)
*/
class ParkingLot {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.spotsAvailable = rows * columns;

    this.parkingSpots = [];

    for (let r = 1; r <= rows; r++) {
      const row = [];
      for (let c = 1; c <= columns; c++) {
        const spot = new ParkingSpot(r, c, this);
        row.push(spot);
      }
      this.parkingSpots.push(row)
    }
  }
  spotIsAvailable(r, c) {
    return this.parkingSpots[r][c].isAvailable();
  }
  getAvailableParkingSpotFor(vehicle) {
    if (vehicle.spotsNeeded > this.spotsAvailable) {
      return "Lot Full";
    }
    if (vehicle instanceof Car) {
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.columns; c++) {
          if (this.spotIsAvailable(r, c)) {
            return this.parkingSpots[r][c];
          }
        }
      }
    }
    if (vehicle instanceof Bus) {
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c <= this.columns - vehicle.spotsNeeded; c++) {
          let spotIsAvailable = true;
          for (let i = 0; i < vehicle.spotsNeeded; i++) {
            if (!this.spotIsAvailable(r, c + i)) {
              spotIsAvailable = false;
            }
          }
          if (spotIsAvailable) {
            return this.parkingSpots[r].slice(c, c + vehicle.spotsNeeded);
          }
        }
      }
    }
    return "Lot Full";
  }
}

/*
Parking Spot
- Properties
  - row: number
  - column: number
  - vehicle: Vehicle
  - parkingLot: parkingLot
- Methods
  - park(vehicle)
  - removeVehicle(vehicle)
  - isAvailable()
  - get spotNumber()
*/
class ParkingSpot {
  constructor(row, column, parkingLot) {
    this.row = row;
    this.column = column;
    this.vehicle = null;
    this.parkingLot = parkingLot;
  }
  park(vehicle) {
    this.vehicle = vehicle;
    this.parkingLot.spotsAvailable--;
  }
  removeVehicle() {
    this.vehicle = null;
    this.parkingLot.spotsAvailable++;
  }
  isAvailable() {
    return this.vehicle === null;
  }
  get spotNumber() { // r5c2
    return `r${this.row}c${this.column}`;
  }
}

/* 
Vehicle
- Properties
  - parkingSpots: array of ParkingSpots
  - license: string
  - spotsNeeded: number
- Methods
  - requestParkingSpot(parkingLot)
  - parkInSpot(parkingSpot)
  - leaveParkingSpot
*/
class Vehicle {
  constructor(license) {
    this.parkingSpots = [];
    this.license = license;
    this.spotsNeeded = 1;
  }

  requestParkingSpot(parkingLot) {
    const parkingSpot = parkingLot.getAvailableParkingSpotFor(this);
    if (parkingSpot === "Lot Full") {
      console.log("gotta find another lot");
      return null;
    }
    this.parkInSpot(parkingSpot);
  }

  parkInSpot(spot) {
    this.parkingSpots.push(spot);
    spot.park(this);
    console.log(`parking in spot ${spot.spotNumber}`)
  }

  leaveParkingSpot() {
    this.parkingSpots.forEach(spot => {
      spot.removeVehicle()
      console.log(`leaving spot ${spot.spotNumber}`)
    });
    this.parkingSpots = [];
  }
}


class Car extends Vehicle {
  constructor(license) {
    super(license);
  }
}

class Bus extends Vehicle {
  constructor(license) {
    super(license);
    this.spotsNeeded = 4;
  }

  parkInSpot(parkingSpots) {
    parkingSpots.forEach(spot => super.parkInSpot(spot))
  }
}

export {
    ParkingLot,
    Car,
    Bus
}