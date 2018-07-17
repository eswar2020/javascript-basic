const days =['mon','tue','wed','thurs','fri','sat']

// console.log(days[1])

// days.forEach(function (days,indx){
//     console.log(`starts with ${indx+1} -- ${days}`);
// })

// months

const months = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']
let toDoList = ['learn HTML','learn CSS','learn JAVA-SCRIPT','learn REACT-JS','learn-PHP']
months.forEach(function (months,index) {
  console.log(`months list as follow ${index+1} -- ${months}`);
})
// forEach(function()
toDoList.forEach(function (toDoList,index) {
  console.log(`toDoList as follow  ${index+1} -- ${toDoList} should complete`);
})


// using for loop

// for (var index = 0; index < days.length; index++) {
//   console.log(days[index])
// }
// reverse order
// for (let i = days.length-1; i >= 0; i--) {
//   console.log(days[i])
// }

// Creating todo application

let todos =[]

todos.push('Learn HTML')
todos.push('learn CSS')
todos.push('learn JS')
todos.push('learn REACT-JS')
todos.push('learn php')

// todos.forEach (function (todos,index){
//   console.log(`my todo's ${index+1}: is ${todos}`);
// })

for (var i = 0; i < todos.length; i++) {
  console.log("my todo's list is " + todos[i])
}
