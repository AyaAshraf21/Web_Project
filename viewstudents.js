function searchStudents() {
    // Get the input value
    var input = document.querySelector(".search-box input[type='text']").value;

    // TODO: Perform the search and get the results as an array of objects

    // Create the table headers
    var tableHeaders = ["Name", "ID" , "Level" , "Status" , "Date of brith" , "GPA" , "Gender" , "Email" , "Department" , "Phone number",  "Edit Student", "Remove Student"];

    // Create the table rows
    var tableRows = [
        {
            name: "John Doe",
            id: "123456",
            level: "Undergraduate",
            status: "Active",
            number: "1999-01-01",
            gap: "3.5",
            gender: "Male",
            mail: "john.doe@example.com",
            department: "Computer Science",
            address: "123-456-7890",
        },
        {
            name: "Omar Kouta",
            id: "20220528",
            level: "Undergraduate",
            status: "Active",
            number: "2003-09-17",
            gap: "3.3",
            gender: "Male",
            mail: "omarkouta551@gmail.com",
            department: "Computer Science",
            address: "1adasf0-ads313",
        }
    ];
    //var tableRows = "";
    // TODO: Loop through the results array and create a row for each student

    // Set the table HTML
    var table = document.getElementById("results-table");
    table.appendChild(createTableHeader(tableHeaders));
    for (let i=0; i<tableRows.length; i++){
        var newRow = table.insertRow();
        let obj = tableRows[i];
        for (let key in obj){
            var cell = newRow.insertCell();
            cell.innerHTML = obj[key];
            table.appendChild(newRow);
        }
        var cell2=newRow.insertCell()
        var cell3=newRow.insertCell()
        cell2.innerHTML="<button onclick='openEditPage()'>Edit Student</button>"
        cell3.innerHTML="<button>Remove Student</button>"
    }
}

function createTableHeader(headers) {
    var tr = document.createElement("tr");
    headers.forEach(function(header) {
        var th = document.createElement("th");
        th.textContent = header;
        tr.appendChild(th);
    });
    return tr;
}
function openEditPage() {
    window.location.href = "EditStudentsPage.html";
}
