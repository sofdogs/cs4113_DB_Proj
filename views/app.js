//code from https://github.com/MuhammadMoiz200099/CRUD---Javascript-HTML5-CSS3/blob/master/app.js
//using to test UI
/*
let edit_record_id = -1;

window.onload = function loadScreen() {
  loadDataFromLocalStorage();
};
function loadDataFromLocalStorage() {
  const tableBody = document.getElementById("generatedTableData");
  let tableData = JSON.parse(localStorage.getItem("crudtable")) || [];
  tableBody.innerHTML = "";
  let html = ``;
  if (tableData) {
    tableData.forEach((data, idx) => {
      html += `
            <tr>
                <th scope="row">${idx + 1}</th>
                <td>${data.name}</td>
                <td>${data.age}</td>
                <td><button onclick="updateDataFromLocalStorage('${data.record_id
        }')" class="btn btn-info">Update</button></td>
                <td><button onclick = "deleteItem('${data.id
                }')" class = btn btn-delete>Delete</button</td>
            </tr>
          `;
    });
  }
  tableBody.innerHTML = html;
}

function validate(field1, field2) {
  if (Boolean(field1) && Boolean(field2)) {
    return true;
  } else {
    return false;
  }
}

function genrateUniqueId(length) {
  var randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

function createNewRecord() {
  const currentName = document.getElementById("name").value;
  const currentAge = document.getElementById("age").value;
  if (validate(currentName, currentAge)) {
    let tableData = JSON.parse(localStorage.getItem("crudtable")) || [];
    const new_record_id = genrateUniqueId(6);
    tableData.push({
      record_id: new_record_id,
      name: currentName,
      age: Number(currentAge),
    });
    localStorage.setItem("crudtable", JSON.stringify(tableData));
    loadDataFromLocalStorage();
    emptyFieldBox();
  } else {
    emptyFieldBox();
  }
}

function emptyFieldBox() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}

function deleteItem(id){
    let tableData = JSON.parse(localStorage.getItem("crudtable")) || [];
    tableData = tableData.filter(({id}) => id !== id);
    localStorage.setItem("crudtable", JSON.stringify(tableData));
    loadDataFromLocalStorage();
}
/*
document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display existing data
    fetchData();
  
    // Handle form submission
    const addForm = document.getElementById('addForm');
    addForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
  
      if (name && age) {
        // Call your Node.js backend API to add data
        addData(name, age);
      }
    });
  
    // Function to fetch and display existing data
    function fetchData() {
      // Call your Node.js backend API to get existing data
      // For now, let's assume you have a sample data array
      const sampleData = [
        { name: 'John', age: 25 },
        { name: 'Alice', age: 30 },
        // Add more data as needed
      ];
  
      const dataList = document.getElementById('dataList');
  
      // Clear existing data
      dataList.innerHTML = '';
  
      // Populate the table with existing data
      sampleData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.name}</td><td>${item.age}</td>`;
        dataList.appendChild(row);
      });
    }
  
    // Function to add new data
    function addData(name, age) {
      // Call your Node.js backend API to add data
      // For now, let's assume you have a sample data array
      const newData = { name, age };
  
      // Add the new data to the table
      const dataList = document.getElementById('dataList');
      const row = document.createElement('tr');
      row.innerHTML = `<td>${newData.name}</td><td>${newData.age}</td>`;
      dataList.appendChild(row);
  
      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('age').value = '';
    }
  });
*/