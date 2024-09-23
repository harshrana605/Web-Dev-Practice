console.log("Harsh Rana") ;

let age = 24 ;
let fullName = "Harsh " ;  // camel casing 

let price = 99.99 ; // cannot be declared again but updated 

x = null ; 
y = undefined ;
isFollow = true ;


const student = {
    fullname : "Rahul Kumar",
    age : 20 ,
    cgpa  : 7.9 
} ;
console.log(student["age"]);
console.log(student.age) ;

student["fullname"] = "Shivam Biala" ;

console.log(student["fullname"])

student["age"] = student["age"] + 1 ;

console.log(x) ;

console.log("abcd" + 123)
console.log(typeof student["cgpa"])



let a = 5 ;
let b = 6 ;

console.log(a>=b);

let cond1 = a<b ; // true
let cond2 = a==b ;  // false


console.log(cond1 || cond2) ;


let age1 = 18
if (age1 == 18) {
    console.log("you can vote")
} else {
    console.log("you can't vote")
}


// let name1 = prompt("hello") ;
// console.log(name1) ;   taking input

// for-of loop -->

let str = "Harsh Rana" ;
let length = 0 ;

for (let i of str) {
    console.log(i); 
     length ++ ; // not necessary
}

console.log(length); 

// for-in loop 

let stud ={
    name : "Vansh Singhal" ,
    age : 23,
    cgpa : 8.0 


};

for ( let key in stud){   // returns key of object
    console.log("key = ", key , " values = " , student[key]);
}

let specialString = `This is a tempelate string` ;

let output = `the name of the student is ${student.fullname} and his cgpa is ${student.cgpa}`
console.log(output) ;

console.log(str.slice(1,5));

let newStr = str + " " + "delhi" + 123 ; 
console.log(newStr)


// arrays in javascript 

let marks = [85,46,51,28,61];

console.log(marks);

let sum = 0 ;

for(let val of marks) {
    sum += val ;
}

let avg = sum / marks.length ;
console.log (`average marks of class is ${avg}`) ;

console.log(marks.toString()) ;

// declaring function

function myFunction(a,b) {
    sum = a+b ;
   return sum ;
}

let sum2 = myFunction(2,3);
console.log(sum2) ;

// Arrow Function  =>

const arrowsum = (a , b) => {
   console.log(a+b)
};  


let arr = [1 , 2 , 3 , 4 , 5] ;

arr.forEach(function printVal(val){ // value at each index // for each loop never returns a value
    console.log(val) ;  
}) ;

arr.forEach ((val, idx ,arr ) => { // callback
    console.log(val , idx , arr) ;    
})

let newarr = arr.map((val) => {
    return val*2  ;
})

console.log(newarr); 


let evenarr = arr.filter((val) => {
    return val%2 == 0 ;  // returns true or false to those value which fulfil condition
})

console.log(evenarr) ;  

const output2 = arr.reduce((prev, curr) => {
    return prev + curr ;
})
console.log(output2)

// for printing largest number

// const output3 = arr.reduce((prev , curr) =>{
//      if(prev > curr){
//         return prev
//      }
//      return curr ;

// })
// console.log(output3) ;



//type conversion 

// let score = "33"

// let data = Number(score)

// console.log(data)

// console.log(undefined >= 0)


