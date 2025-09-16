// Teacher interface with readonly properties and index signature
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Example usage of the Teacher interface
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  salary: 50000,
  department: 'Mathematics',
};

// Demonstrating that firstName and lastName are readonly
// teacher1.firstName = 'Bob'; // This would cause a TypeScript error

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
