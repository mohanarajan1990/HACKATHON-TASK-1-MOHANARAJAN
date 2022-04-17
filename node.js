// fetching of Data
// XMLHttpRequest

// http methods:
// Get=>Read the Data
// POST=>send the data to Server
// PUT=>update the data on existing
// DELETE=>Delete the data


// var xhr = new XMLHttpRequest();
// xhr.open("Get","http://makeup-api.herokuapp.com/api/v1/products.json");



// xhr.send();

// xhr.onload = function () {
//     if (xhr.status>=200&&xhr.status<300) {
//         var data = json.parse(xhr.response);
//         console.log(data)

//     }
// };



// functions;
// let a;

// console.log(a);

// a = 10;
// console.log(a);

// test();


// function test() {
//     console.log("mohan");
// }



// RESTOPERATOR;

// function add (data) {
//     let total = 0;
//     for (let i of data) {
//         total +=i;
//     }
//     console.log(total);
// }
// add([2, 4, 6, 8, 10)


// DOM;

// let a = document.getElementById("txtlearning");
// a.value = "this is mohan";
// console.log(a);


// let div = document.getElementById("first-div");
// div.innerHTML = "<b>this is html</b>";




// fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`, {
//     method: `POST`,
    

//     headers: {
//     "Content-Type" : "application/json"
// },
// body: JSON.stringify({
//     name: `User 1`
// })
// }).then(res => {
//     return res.json()
// })
    
// .then(data => console.log(data))
// .catch(error => console.log(`ERROR`))




// async function loadusers() {
//     const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");

//     console.log(response);
// }

// document.addEventListener("DOMContentLoaded", async () => {
//     let users = [];

//     try {
//         users = await loadusers();
//     } catch (e) {
//     console.log("Error");
//     console.log(e);
// }
// console.log(users);
// });



// filter;

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered);


