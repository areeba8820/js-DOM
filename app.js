// console.log(document);
// console.log(document.head);
// console.log(document.body);


// console.log(document.body.childNodes);

// let head = document.getElementById("heading");
// head.style.color = "blue";
// head.style.backgroundColor = "yellow"
// head.style.fontSize = "64px";
// console.log(head);

// let para1 = document.getElementsByClassName("para");
// para1[0].style.color = "green";
// para1[0].style.backgroundColor = "pink"
// para1[0].style.fontSize = "60px"
// para1[0].style.border = "2px solid black"

// para1[1].style.color = "red";
// para1[1].style.backgroundColor = "aqua"
// para1[1].style.fontSize = "70px"
// para1[1].style.fontWeight = "bold"


// para1[1].innerHTML = "Hello World";

// const collection = document.getElementsByClassName("example color");
// collection[0].style.backgroundColor = "grey";
// collection[0].style.fontSize = "64px";
// collection[0].style.border = "3px solid black"


// let collection = document.getElementsByTagName("li");
// document.getElementsById("demo").innerHTML = collection[0].innerHTML;
// document.getElementById("demo").innerHTML = collection[2].innerHTML;


// let collection1 = document.getElementsByTagName("li");
// collection1[1].style.backgroundColor = "Navy"


function changeColor(newColor){
    const btn = document.getElementById("para")
    btn.style.color = newColor;
}