const form = document.getElementById('form');
const ID = document.getElementById('ID');
const password = document.getElementById('password');

let admin;

fetch('scripts/admin.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        admin = data;
    })
    .catch(error => {
        console.error(error);
    });


// const admin = JSON.parse('admin.json');
form.addEventListener('submit', (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    if (ID.value.trim() === '') {
        // Display error message
        alert('Please enter the ID');
        // Focus on the ID field
        ID.focus();
        // Exit the function
        return;
    }
    // Check if the age field is empty
    if (password.value.trim() === '') {
        // Display error message
        alert('Please enter the password');
        // Focus on the password field
        password.focus();
        // Exit the function
        return;
    }
    const matching = admin.find(u => u.ID === ID && u.password === password);

    if (!matching) {
        alert('ID or password is invalid');
        return;
    }

    alert('Login success');
    window.location.href = "index.html";
});
