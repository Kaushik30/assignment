let task = document.getElementById("task");
let priority = document.getElementById("priority");
const sbutton = document.querySelector("input[type='submit']");
let tbody = document.querySelector("tbody");
let tarr = [];

sbutton.addEventListener("click", function (event) {

    event.preventDefault();

    let data = {
        task1: task.value,
        priority1: priority.value,
        favourite1: "",
    }

    tarr.push(data);
    calltable();
});

function calltable() {
    tbody.innerHTML = "";

    tarr.map(function (elem) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");



        td1.innerText = elem.task1;
        td2.innerText = elem.priority1;

        if(elem.priority1 == "High"){
            td2.style.backgroundColor="red";
        }
        else if(elem.priority1 == "Low"){
            td2.style.backgroundColor="Green";
        }

        
        tr.append(td1, td2, td3);


        tbody.appendChild(tr);

    });

}

