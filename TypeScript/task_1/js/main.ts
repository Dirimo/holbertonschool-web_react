// Teacher interface with readonly properties and index signature
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function that implements the printTeacherFunction interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
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

// Example usage of the Directors interface
const director1: Directors = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: 'California',
  numberOfReports: 15,
  budget: 100000,
};

const director2: Directors = {
  firstName: 'Bob',
  lastName: 'Wilson',
  fullTimeEmployee: true,
  location: 'Texas',
  numberOfReports: 8,
  department: 'Science',
};

// Demonstrating that firstName and lastName are readonly
// teacher1.firstName = 'Bob'; // This would cause a TypeScript error
// director1.firstName = 'Carol'; // This would also cause a TypeScript error

// Testing the printTeacher function
console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Director 1:', director1);
console.log('Director 2:', director2);

console.log('\nPrintTeacher function examples:');
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith
console.log(printTeacher("Alice", "Johnson")); // Output: A. Johnson
console.log(printTeacher("Bob", "Wilson")); // Output: B. Wilson

// Testing the StudentClass
console.log('\nStudentClass examples:');
const student1: StudentClassInterface = new StudentClass("Michael", "Brown");
const student2: StudentClassInterface = new StudentClass("Sarah", "Davis");

console.log(`Student 1 display name: ${student1.displayName()}`); // Output: Michael
console.log(`Student 1 work status: ${student1.workOnHomework()}`); // Output: Currently working
console.log(`Student 2 display name: ${student2.displayName()}`); // Output: Sarah
console.log(`Student 2 work status: ${student2.workOnHomework()}`); // Output: Currently working