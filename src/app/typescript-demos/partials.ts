interface Employee {
  firstName: string;
  middleName: string;
  lastName: string;
}

type EmployeeListItem = Pick<Employee, 'firstName' | 'lastName' | 'middleName'>;

const employee4: Employee = {
  firstName: 'Vlad',
  lastName: 'G',
  middleName: 'N',
};

const employee2: Partial<Employee> = {
  firstName: '',
};

const employee3: Required<Employee> = {
  firstName: 'Vlad',
  lastName: 'G',
  middleName: 'N',
};

const employee5: Readonly<Employee> = {
  firstName: 'Vlad',
  lastName: 'G',
  middleName: 'N',
};

// Error, cannot modify readonly property
employee5.firstName = 'test';

const employee6: Pick<Employee, 'firstName'> = {
  firstName: 'Vlad',
};

const employee7: Omit<Employee, 'middleName'> = {
  firstName: 'Vlad',
  lastName: 'G',
};

type MyFunctionType<T> = (id: string) => T;

const myFn: MyFunctionType<Employee> = (id: string) => ({
  firstName: 'Vlad',
  lastName: 'G',
  middleName: 'N',
});

type MyFunctionTypeReturnType = ReturnType<MyFunctionType<Employee>>;
