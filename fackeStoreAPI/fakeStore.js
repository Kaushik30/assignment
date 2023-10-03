let arr = [];



async function electro() {
    try {
        let res = await fetch("https://fakestoreapi.com/products/category/electronics");
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.error("Data not found");
    }
};


async function jwel() {
    try {
        let res = await fetch("https://fakestoreapi.com/products/category/jewelery");
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.error("Data not found");
    }
};

async function men() {
    try {
        let res = await fetch("https://fakestoreapi.com/products/category/men%27s%20clothing");
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.error("Data not found");
    }
}

async function women() {
    try {
        let res = await fetch("https://fakestoreapi.com/products/category/women%27s%20clothing");
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.error("Data not found");
    }
}

function incSort() {
    arr.sort(function (a, b) {
        return a.price - b.price;
    });
    displayData(arr);
}

function decSort() {
    arr.sort(function (a, b) {
        return b.price - a.price;
    });
    displayData(arr);
}

let prodInpElement = document.getElementById("inpValue");

async function search() {
    try {
        let prodInpValue = prodInpElement.value.toLowerCase();
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        let newData = data.filter((ele) => ele.title.toLowerCase().includes(prodInpValue));
        displayData(newData);
    } catch (error) {
        console.log("Data not found");
    }
}

let displayElement = document.querySelector("#root");

function displayData(data) {
    arr = data;
    displayElement.textContent = "";
    data.forEach(function ({ image, title, description, price }) {
        let prodCard = document.createElement("div");
        prodCard.className = "card";
        let elementImg = document.createElement("img");
        elementImg.src = image;
        let elementTitle = document.createElement("p");
        elementTitle.className = "prodTitle";
        elementTitle.textContent = title;
        let elementDescription = document.createElement("p");
        elementDescription.className = "prodDes";
        elementDescription.textContent = description;
        let elementPrice = document.createElement("p");
        elementPrice.textContent = `Price: $${price}`;
        prodCard.append(elementImg, elementTitle, elementDescription, elementPrice);
        displayElement.append(prodCard);
    });
}
