// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student variables
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'California'
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  // Create table element
  const table: HTMLTableElement = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';
  table.style.marginTop = '20px';

  // Create table header
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  
  const firstNameHeader: HTMLTableCellElement = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.border = '1px solid #ddd';
  firstNameHeader.style.padding = '8px';
  firstNameHeader.style.backgroundColor = '#f2f2f2';
  
  const locationHeader: HTMLTableCellElement = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.border = '1px solid #ddd';
  locationHeader.style.padding = '8px';
  locationHeader.style.backgroundColor = '#f2f2f2';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  
  // Iterate through studentsList and create rows
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid #ddd';
    firstNameCell.style.padding = '8px';
    
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid #ddd';
    locationCell.style.padding = '8px';
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  
  // Append table to document body
  document.body.appendChild(table);
}

// Wait for DOM to load and then render the table
document.addEventListener('DOMContentLoaded', () => {
  const title: HTMLHeadingElement = document.createElement('h1');
  title.textContent = 'Student List';
  title.style.fontFamily = 'Arial, sans-serif';
  title.style.color = '#333';
  document.body.appendChild(title);
  
  renderTable();
});
