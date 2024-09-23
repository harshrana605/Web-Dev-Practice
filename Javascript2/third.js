// console.log(document.querySelectorAll('div'))   // returns nodelist

// console.log(document.getElementById('fact'))   // returns that element which contains this id

// document.getElementById('btn1').addEventListener('click', function(e){
//     console.log(e) ;
// },false)  //returns timestamp , default behaviour, target , toElement 



// document.querySelector('#list').addEventListener('click', function(e){
//     console.log(e.target.parentNode);
//     let removeIt = e.target.parentNode ;
//     removeIt.remove()
// })



const user = {
    username : "Harsh" ,
    email : "abc@gmail",
    age : 20 ,


    newFunction : function(){
        console.log(`${this.username}`)
    }

}

user.newFunction(); 



// Constructor function
function User(username, password, otp) {
    this.username = username;
    this.password = password;
    this.otp = otp;
}

// Create a new instance of User
const userOne = new User("Shivam", 123, 369369);

// Output the instance
console.log(userOne);











