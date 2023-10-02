let tbody = document.querySelector("tbody");

async function init() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

function displayData(allTask) {
    allTask.forEach(({ id, title, completed }) => {
        let tr = document.createElement("tr");
        tr.className = "task-card";


        let taskIdEle = document.createElement("td");
        taskIdEle.innerHTML = id;
        taskIdEle.style.textAlign = "center"

        let taskNameEle = document.createElement("td");
        taskNameEle.innerHTML = title;

        let taskStatusEle = document.createElement("td");
        taskStatusEle.innerHTML = completed;
        taskStatusEle.style.textAlign = "center"

        if (completed) {
            tr.style.background = "lightgreen"
        }
        else {
            tr.style.background = "#ed645a"

        }


        tr.append(taskIdEle, taskNameEle, taskStatusEle);

        tbody.appendChild(tr);
    });
}

init();
