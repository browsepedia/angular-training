declare global {
  interface Array<T> {
    filterByProperty(propertyName: keyof T, propertyValue: T[keyof T]): T[];
  }
}

declare global {
  interface Array<T> {
    filterByProperty(propertyName: keyof T, propertyValue: T[keyof T]): T[];
  }
}

interface Employee {
  firstName: string;
  lastName: string;
}

Array.prototype.filterByProperty = function <T>(
  propertyName: keyof T,
  propertyValue: T[keyof T]
): T[] {
  return this.filter((entity) => entity[propertyName] === propertyValue);
};

const array: Employee[] = [];
array.filterByProperty('firstName', 'Vlad');

export {};
