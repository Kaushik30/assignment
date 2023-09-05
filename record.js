// // fill in javascript code here

let name1 = document.getElementById("name");
let id = document.getElementById("employeeID");
let dept = document.getElementById("department");
let expi = document.getElementById("exp");
let email = document.getElementById("email");
let mob = document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let tabarr = [];

const button = document.querySelector("input[type='submit']");

button.addEventListener("click", function (event) {
    event.preventDefault();

    let data = {
        name2: name1.value,
        id2: id.value,
        dept2: dept.value,
        expi2: expi.value,
        email2: email.value,
        mob2: mob.value,
        roll2: "",
    };

    if (data.expi2 > 5) {
        data.roll2 = "Senior";
    } else if (data.expi2 >= 2 && data.expi2 <= 5) {
        data.roll2 = "Junior";
    } else if (data.expi2 > 0 && data.expi2 <= 1) {
        data.roll2 = "Fresher";
    }
    tabarr.push(data);
    renderTable();
});

function deleteRow(index) {
    tabarr.splice(index, 1);
    renderTable();
}

function renderTable() {
    tbody.innerHTML = "";

    tabarr.forEach(function (elem, index) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");

        td1.innerText = elem.name2;
        td2.innerText = elem.id2;
        td3.innerText = elem.dept2;
        td4.innerText = elem.expi2;
        td5.innerText = elem.email2;
        td6.innerText = elem.mob2;
        td7.innerText = elem.roll2;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteRow(index);
        });

        td8.appendChild(deleteButton);

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.appendChild(tr);
    });
}
