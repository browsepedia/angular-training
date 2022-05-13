// interface Employee {
//   firstName: string;
//   lastName: string;
// }

interface Car {
  brandName: string;
  maxSpeed: number;
}

const entity: Employee | Car = {
  brandName: 'test',
  maxSpeed: 0,
  firstName: 'Vlad G',
  lastName: 'G',
};

type EmployeeCar = Employee & Car;
type EmployeeOrCar = Employee | Car;

const employeeCar: EmployeeCar = {
  brandName: 'test',
  maxSpeed: 0,
  firstName: 'Vlad G',
  lastName: 'G',
};

const employeeOrcar: EmployeeOrCar = {
  brandName: 'test',
  maxSpeed: 0,
};
