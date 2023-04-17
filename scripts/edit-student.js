// Get the student ID from the query string
const urlParams = new URLSearchParams(window.location.search);
const studentId = urlParams.get('id');

// Retrieve student data from local storage
const students = JSON.parse(localStorage.getItem('students'));

// Find the student with the matching ID
const student = students.find((s) => s.id === studentId);

// Fill in the form with the student data
const nameInput = document.getElementById("name");
nameInput.value = student.name;

const idInput = document.getElementById("id");
idInput.value = student.id;

const levelInput = document.getElementById("level");
levelInput.value = student.level;

const statusSelect = document.getElementById("status");
statusSelect.value = student.status;

const dateInput = document.getElementById("date");
dateInput.value = student.date;

const departmentSelect = document.getElementById("de");
departmentSelect.value = student.department;

const gpaInput = document.getElementById("gpa");
gpaInput.value = student.gpa;

const emailInput = document.getElementById("email");
emailInput.value = student.email;

const genderSelect = document.getElementById("gender");
genderSelect.value = student.gender;

const phoneInput = document.getElementById("phone");
phoneInput.value = student.phone;


// edit the student data

const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', () => {
  // Get the updated student data from the form
  const updatedStudent = {
    name: nameInput.value,
    id: idInput.value,
    level: levelInput.value,
    status: statusSelect.value,
    date: dateInput.value,
    department: departmentSelect.value,
    gpa: gpaInput.value,
    email: emailInput.value,
    gender: genderSelect.value,
    phone: phoneInput.value
  };

  // Find the index of the student with the matching ID
  const studentIndex = students.findIndex((s) => s.id === studentId);

  // Update the student data in the array
  students[studentIndex] = updatedStudent;

  // Save the updated student data back to local storage
  localStorage.setItem('students', JSON.stringify(students));

  // Redirect the user back to the view all students page
  console.log("Redirecting to view all students page");
  window.location.href = "view_Students.html";
});


// delete the student data

const deleteBtn = document.getElementById('del-btn');

deleteBtn.addEventListener('click', () => {
  // Find the index of the student with the matching ID
  const studentIndex = students.findIndex((s) => s.id === studentId);

  // Remove the student from the array
  students.splice(studentIndex, 1);

  // Save the updated student data back to local storage
  localStorage.setItem('students', JSON.stringify(students));

  // Redirect the user back to the view all students page
  console.log("Redirecting to view all students page");
  window.location.href = "view_Students.html";
});
