// Interfaces pour les données
interface TeacherInfo {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends TeacherInfo {
  numberOfReports: number;
}

// Interface du printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Fonction printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interfaces et classes Student
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

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

// Interfaces et classes Employee
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Fonction de factory pour créer un employé
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate pour vérifier si un employé est un Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Fonction executeWork qui appelle le bon method selon le type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// String literal type Subjects
type Subjects = "Math" | "History";

// Fonction teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Exemples de données (pour données uniquement)
const teacher1: TeacherInfo = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const teacher2: TeacherInfo = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  salary: 50000,
  department: 'Mathematics',
};

const director1: Directors = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
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

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Director 1:', director1);
console.log('Director 2:', director2);

console.log('\nPrintTeacher function examples:');
console.log(printTeacher("John", "Doe")); // J. Doe
console.log(printTeacher("Jane", "Smith")); // J. Smith
console.log(printTeacher("Alice", "Johnson")); // A. Johnson
console.log(printTeacher("Bob", "Wilson")); // B. Wilson

console.log('\nStudentClass examples:');
const student1: StudentClassInterface = new StudentClass("Michael", "Brown");
const student2: StudentClassInterface = new StudentClass("Sarah", "Davis");

console.log(`Student 1 display name: ${student1.displayName()}`);
console.log(`Student 1 work status: ${student1.workOnHomework()}`);
console.log(`Student 2 display name: ${student2.displayName()}`);
console.log(`Student 2 work status: ${student2.workOnHomework()}`);

console.log('\nDirector and Teacher examples:');
const employee1: Director | Teacher = createEmployee(200);
const employee2: Director | Teacher = createEmployee(1000);
const employee3: Director | Teacher = createEmployee('$500');

console.log('Employee 1 (salary: 200):');
console.log(` Work from home: ${employee1.workFromHome()}`);
console.log(` Coffee break: ${employee1.getCoffeeBreak()}`);
console.log(` Work tasks: ${executeWork(employee1)}`);

console.log('Employee 2 (salary: 1000):');
console.log(` Work from home: ${employee2.workFromHome()}`);
console.log(` Coffee break: ${employee2.getCoffeeBreak()}`);
console.log(` Work tasks: ${executeWork(employee2)}`);

console.log('Employee 3 (salary: "$500"):');
console.log(` Work from home: ${employee3.workFromHome()}`);
console.log(` Coffee break: ${employee3.getCoffeeBreak()}`);
console.log(` Work tasks: ${executeWork(employee3)}`);

console.log('\nTeaching Classes:');
console.log(teachClass("Math"));
console.log(teachClass("History"));
