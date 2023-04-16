// Get the table body element
const tableBody = document.getElementById('student-table-body');

// Retrieve student data from local storage
const students = JSON.parse(localStorage.getItem('students'));

// Loop through the students and create table rows
students.forEach((student) => {
  const row = tableBody.insertRow();

  // Insert student data into table cells
  row.insertCell().innerHTML = student.name;
  row.insertCell().innerHTML = student.id;
  row.insertCell().innerHTML = student.level;
  row.insertCell().innerHTML = student.status;
  row.insertCell().innerHTML = student.date;
  row.insertCell().innerHTML = student.gpa;
  row.insertCell().innerHTML = student.gender;
  row.insertCell().innerHTML = student.email;
  row.insertCell().innerHTML = student.department;
  row.insertCell().innerHTML = student.phone;
  row.insertCell().innerHTML = `<a href="EditStudentsPage.html?id=${student.id}" class="edit">&ensp; Edit &ensp;</a>`;
});
