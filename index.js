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

function greet(callback) {
  console.log("Hello");
  callback()
}

greet(() => {
  console.log("Bye");
});




 
