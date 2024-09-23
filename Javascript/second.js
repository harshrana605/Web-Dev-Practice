console.log(undefined >= 0)
console.log(null >= 0)
console.log("2" === 2)

const newString = new String('Hitesh ha')
console.log(newString[0])

console.log(newString.toUpperCase())

const balance = new Number(1000000)
console.log(balance)
console.log(balance.toFixed(1))   // adds decimal places
console.log(balance.toLocaleString()) // adds comma to number

// Maths Javascript 

console.log(Math.round(4.54))
console.log(Math.floor(Math.random()*10 + 1))




// DAtes in JAvascript

let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof myDate)







const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max-min + 1) + min))


let myCreatedDate = new Date(2020,0,12)
console.log(myCreatedDate)
let wtfDate = new Date("01-14-2023")
console.log(wtfDate.toLocaleString())


// defining new properties 

let newDate = new Date()
newDate.toLocaleString('default' , {
    weekday : "long"
}) 



const arr = [0,1,2,3,4]
const arr2 = [65, 45,89,56]
const arr1 = ["marvel", "dc ", "superman","iron man"] 

const arr3 = new Array(0,10,2,0,3)

const myarr = arr.splice(1,3)
console.log(arr)  // actual array got changed


const newArr = arr.concat(arr2)
console.log(newArr)

const allHeroes = [...arr , ...arr2]  // spread operator
console.log(allHeroes)

 
// objects in javascript 
const mySym = Symbol("key1")  
const obj = {
    name : "Harsh" ,
    age : 20,
    location : "JAipur ",
    [mySym] : "myKey1"
}
const tinderUSer = new Object()

const {name : fullName} = obj 
console.log(fullName)

function loginUsername(username){
    if(!username) { // username === undefined
      console.log("enter value")
      return
    }
    return `${username} is given`

}

console.log(loginUsername("Harsh"))


function calculatePrice(val1,...num){
     return num

}

console.log(calculatePrice(200,300,400))

const addTwo = () =>( {username : "Harsh"}) // returning object in funciton 

// Immediately invoked functions 

(function chai(){    // named iife
    console.log("database connected")
}
)();

(() => {   // simple iife
    console.log("Harsh")
})()


// for loop
let arr5 = [5,10,20,30] 

for (let i = 0 ; i < arr5.length ; i++){
      const element = arr5[i]
      console.log(element)
}

// for (let i = 0 ; i<=10 ; i++){
//     console.log(`outer loop value ${i}`)
//     for(let j=0 ; j <=5 ;j++){
//         console.log(`inner loop ${j} , outer loop ${i}`)
//     }
// }

for(const key in obj) {
    console.log(key, obj[key])
}

const newNumb = arr5.filter((num) => {
     return num > 5  // return keyword is used as scope is used 
})
// chaining in methods 

const newNumbe = arr5.map((num) => num*10 ).map((num) => num+1)
console.log(newNumbe)



const output2 = arr5.reduce((prev, curr) => {
    console.log(`${prev}     and ${curr}`)
    return prev + curr ;
})
console.log(output2)


  
