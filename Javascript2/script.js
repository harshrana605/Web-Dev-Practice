// console.dir(window.document.body)
let heading1 = document.getElementById("heading") ;
console.log(heading1)
console.dir(heading1)

console.dir(heading1.innerText)

heading1.innerText = heading1.innerText + " by Harsh"

// heading1.innerText = "abc"  manipulates main string

let p = document.getElementsByTagName("p") ;

console.log(p);

let elements = document.querySelector("p");
// console.log(elements)
console.dir(elements);
let element = document.querySelectorAll("p") // all elements






let divs = document.querySelectorAll(".box")
console.log(divs)
console.dir(divs) 

console.log(divs[0])


divs[0].innerText = "New Value 1 "

let idx = 0 ;
for(let div of divs) {
    div.innerText = `new Unique Value ${idx}`
    idx++
}


// DOM properties part 2 

let id = elements.getAttribute("id")
console.log(id) ; 
elements.style.backgroundColor = "aqua"

let newbtn = document.createElement("button") // creating button in javascript
newbtn.innerText = "Hello Harsh " // adding text to button
console.log(newbtn) ; // only on console
let div3 = document.querySelector("div")  
div3.append(newbtn) ;  // creating div3 which can access div elements and append a new button which is created


//lets create a new heading

let newHeading = document.createElement("h1")
newHeading.innerHTML = "<i>  Hey i am new Heading from Javascript </i>"
document.querySelector("body").prepend(newHeading);




// event listening in javascript 

let btn1 = document.querySelector("#btn1") ;


btn1.addEventListener("click" , () => {
    console.log("button ws clicked - haandler1")
})

btn1.addEventListener("click" , () => {
    console.log("button ws clicked - haandler2")
})

const handler3 = () => {
    console.log("button was clicked - handler 3")
}
btn1.removeEventListener("click" , handler3)



// changing mode to light and dark of webpage
let currMode = "light" // dark

btn1.addEventListener("click" , () => {
    if (currMode == "light"){
        currMode = "dark"
        document.querySelector("body").style.backgroundColor = "black";
    
    }
    else {
        currMode = "light"
        document.querySelector("body").style.backgroundColor = "white"
    }

    console.log(currMode)
})


// Classes and objects 

const employee = {
    calcTax1() {
        console.log("tax rate is 10%")
    },
    calctax2 : function () {
        console.log("tax rate")
    }
}

const KaranArjun = {
    salary : 50 
}

KaranArjun.__proto__ = employee ;  // now calcTAx has been introduced in the karanarjun object


//creating class 
class Car {
    constructor(brand){
        console.log("new object is createdjj")
        this.brand = brand ;
    }
      start() {
        console.log("start")
      }
      stop(){
        console.log("stop")
      }
}
let fortuner = new Car() ;
let hyundai = new Car("852365") ;

//inheritance in javascsript 
class Parent {
    hello(){
        console.log("hello")
    }
}
class Child extends Parent {}

let obj = new Child();

// timeout function is also  a callback function

setTimeout (() => {      
    console.log("hello")
}, 1000)


function sum(a,b){
    console.log(a+b)
}

function calculator(a,b, sumCallback){
    sumCallback(a,b)
}

calculator(1,2,sum)  // it will call the function, should be declared without parentheses
sum(1,2) 

// Promises  of javascript 

// let promise = new Promise((resolve, reject) => {
//      console.log("promises of javascript")
//     resolve("success")   // can  be rejected too 
// })

// function getData(dataid , getNextData){
//     return new Promise(( resolve, reject) => {  // gives a promise that i will return data in 5 seconds
//         setTimeout(() => {
//             console.log("data" , dataid) 
//             resolve("success")
//             if(getNextData){
//                 getNextData();
//             }
//         } , 5000)
//     })

// }
//callback hell as data 2 should be fetched after data 1 fetching and printing is done
// getData(1 , () => {
//     console.log("getting data 2")
//     getData(2, () => {
//         console.log("getiing data3 .....")
//         getData(3 , () => {
//             console.log("getting data 4")
//             getData(4) ;
//         })
//     })
// })
// let promise2 = getData(123)
// console.log(promise2)



// Promise function another example 

// function asynFunc1(){
//     return new Promise((resolve,reject) => {
//         setTimeout (() => {
//             console.log("some data 1")
//             resolve("success")
//         } ,5000)
//     })
// }


// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout (() => {
//             console.log("some data 2 ")
//             resolve("success")
//         } ,5000)
//     })
// }  

console.log("fetching data 1 ") 
let p1 = asynFunc1();   // can also be written asynFunc1.then()
p1.then((res) => { 
    console.log(res)
    console.log("fetching data2 ......")
    let p2 = asyncFunc2()
    p2.then((res) =>{
        console.log(res)
    })
}) ; // p1.then will only work when promise is resolved




// async Await in javascript 

// (async function getalldata(){
//     await getData(1);
//     await getData(2)
// })()     // automatically invoked


//fetch api 

// const url = "" ; // can be any url
// const factPara = document.querySelector("#fact")
// const getFacts = async () => {
//    console.log("getting data")
//    let response = await fetch(url)   // get request as we are receiving data
//     console.log(response)   // JSON format j
//     let data = response.json() ;
//     factPara.innerText = data[0].text ;
// }


// Function Instance in code 














