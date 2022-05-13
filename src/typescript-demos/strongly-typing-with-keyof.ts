const getPropertyValue = <T>(obj: T, key: keyof T): T[keyof T] => obj[key];

// interface Employee {
//   firstName: string;
//   lastName: string;
// }

interface Car {
  brandName: string;
  maxSpeed: number;
}

const employee: Employee = {
  firstName: 'Vlad',
  lastName: 'G',
};

const car: Car = {
  brandName: 'Vlad',
  maxSpeed: 23,
};

console.log(getPropertyValue(car, 'brandName'));
