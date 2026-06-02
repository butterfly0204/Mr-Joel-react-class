// arrow function

// greeting = ()=>{
//     console.log("Hello World");
// }
// greeting()

// multiple= (num1) => {
//  return num1 * num1
// }

// console.log(multiple(3));

// greet =() =>{
//     console.log("Hello welcome");
// }
// greet()

// let nums = [2,4,6,8]
// let result = nums.map((num) =>{
//     return num * num
    
// })
// console.log(result);

// let numbers = [5,15,25,35]
// let answer = numbers.map( num =>{
//     return num *3

// }

//  )
//  console.log(answer)

//filter
// let myNumber = [2,20,40,3,5,6,7,8,10,30,60,58]

// let result = myNumber.filter(num =>
//      num <10
// )
// console.log(result)

// let myNumber = [2,20,40,3,5,6,7,8,10,30,60,58]

// let result = myNumber.filter( (num) =>{
//     return num<10
// })

// console.log(result);



// let nums = [1,2,3,4,5,6,7,8]

// let result= nums.filter( num => num % 2 === 0)

// console.log(result)



////////////////////SPREAD AND RES OPERATORS ///////////////////////////////


// let a = [1,2,3]
// let b = [4,5,6]
// console.log(...a, ...b)

// function sum(...fruits){
//     return fruits;
// ``
// }

// console.log(1,2,3,4,5)

//  numbers =[1,2,3,4,5]

//  let result = numbers.map(num =>num*2)
//  console.log (result)
// const add = (a,b) =>{
//   return  a+b
// }
// console.log(add(2,3))

// const calculator = {
//     add: (a,b) => a+b,
//     substract: (c,d) => c-d,
//     divide: (a,b) => a/b ,
//     multiple:(a,b) =>a*b

    
// }

// console.log( calculator.multiple(3,5))

// const first =[1,3]
// const second = [2,5]

// console.log (...first, ...second)

// reduce() method
// const numbers = [1,2,3]
// const answer = numbers.reduce((acc, num)=>{
//     return acc +num
// }, 5)

// console.log(answer)
// const numbers = [2,3,4]
// const result =numbers.reduce((acc,number) =>{

//   return acc * number
// }, 1)

// console.log(result)
// function morning (name, callback) {

//     console.log("Good morning" + name)
//     callback()

// }
// function goodbye(){
//     console.log("goodbye");
    
// }
// morning(" favour", goodbye)

// function playGame(aftergame){
//     console.log("i am playing game my girl")
//     aftergame()
// }
// function eatFood(){
//     console.log("I am eating my food")

// }
// playGame(eatFood)

// function test(callback) {
//   callback();
// }

// test(() => {
//   console.log("Running...");

// });
// // let food = "plantain"
//   function processOrder(name, callback){
//     console.log("order Recieved: " + name)
//     callback(name)
//   }

//   function cookFood(name){
//     console.log("cooking food: " +  name)
//   }

//   processOrder("Plantain",cookFood)


// function calculate(a,b, operation){
//     return   operation(a,b)

// }
// function add(a,b){
//     return(a +b)
// }
// function multiple(a,b){

//     return(a *b)
// }
// console.log( calculate(3,5,multiple))

// function greet(callback) {
//   console.log("Hello");
//   callback()
// }

// greet(() => {
//   console.log("Bye");
// });
//  loginUser((callback)=>{
//     console.log("logging in....")
//     callback()
//  })

//  getUserProfile( ()=>{ 
//     console.log("loading Profile")

//  })

//  loginUser(callback)

//  function loginUser(callback){
//     console.log("logging in...")
//     callback()
    
//  }

//  function getUserProfile(){
//     console.log("Loading Profile.....")
//  }

//  loginUser(getUserProfile)
// console.log("Start");

// setTimeout(() => {
//   console.log("Inside timeout");
// }, 2000);

// console.log("End");


// let foodPromise = new Promise((resolve, reject) => {
//   let foodReady = true;

//   if (foodReady) {
//     resolve("Here is your food 🍔");
//   } else {
//     reject("No food available ❌");
//   }
// });

// // foodPromise.then((message) =>{
// //     console.log(message)

// // })
// // .catch((error) => 
// //     {
// //         console.log(error);
        
    
// //     }
// // )


// let foodpromise = new Promise((resolve, reject) => {
//     let foodIsREady = false

//     if(foodIsREady){
//         resolve("food is ready to eat")
//     }
//     else{
//         reject("order isnt available")
//     }
// })
// foodpromise
// .then((message) => {

//     console.log(message)
    
// })

// .catch((error) => {
//     console.log(error)

    
// }) 

// let foodPromise = new Promise((resolve, reject) => {
//     let foodIsREady =true
//     if(foodIsREady){
//         console.log("food is ready");
        
//     }
//     else{
//         console.log("food is not ready")
//     }
// })

// foodPromise
// .then((message)=>{
//     console.log(message)

// })
// .catch((error) =>{
//     console.log(error)
// })

// let myPromise = new Promise((resolve, reject) => {
//     console.log("loading.....")
//     setTimeout(() => {
//         resolve("done.")
        
//     }, 2000);
// })

// myPromise.then((message)=>{
//     console.log(message)
// })

//  let CheckPassword = new Promise((resolve, reject) => {
//    let password = 1234
//     if(password === 1234){
//         resolve('Correct password')
//     }
//     else{
//         reject("wrong Password")
//     }
//  })

//  CheckPassword
//  .then((message) =>{
//     console.log(message)

//  })
// .catch((error) =>{
//     console.log(error);
    

// })

// async function waitExample() {
//   console.log("Start");

//   await new Promise(resolve => setTimeout(resolve, 2000));

//   console.log("After 2 seconds");
// }

// waitExample();

// async function getData() {
//     console.log("fetching data")
//     let data = await  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("data Recieved")
            
//         }, 2000);
        
//     })
//     console.log(data)
    
// }

// getData()

// Ternary Operator

// 

// let playerGuess = 6
// const CorrectAnswer = 6
// let message = playerGuess === CorrectAnswer? "correct":
//  playerGuess<CorrectAnswer? "Too Low": "Too High"

// console.log(message)

//SWITCH STATEMENT

// function selectItem(item){
//     let price = 0
//     switch(item){
//         case 'coffee':
//             price =2

//         break

//         case 'sandwiches':
//              price= 5
//              break
        
//         case 'salad':
//             price = 4
//             break
        
//         case 'lemon cake':
//         price = 4
//         break

//         default:
//         return `sorry, we dont see ${item}`

//     }
//     return `you selected ${item} that will be $${price}`
// }

// console.log( selectItem("salad"))

// Objesct disstructioning 

const dreamHoliday = {
    destination: 'Canada',
    activity: 'Playing Chess',
    accommodation: 'Peace',
    companion: " Bukola"

}

const {destination, activity, accommodation, companion} = dreamHoliday
console.log(`i would love to go to ${destination},
     i will be ${activity} and will be going to ${accommodation} 
     and with my bestie${companion}`)