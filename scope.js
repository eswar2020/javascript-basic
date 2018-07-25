let iamGlobal = 'somevalue'
if (true) {
  var iamLocal = 'someLocalvalue'
  //var can be called outside of the loop
  // let have some limitations
  // mainly let is used for security reasons

  console.log(iamGlobal)
  console.log(iamLocal)
}
console.log(iamGlobal)
console.log(iamLocal)

// local variable can't be call from outside of the loop
// golobal varible can be called outside of the loop


// king Game

let king='eswar'
if (true) {
   let king='krishna'
console.log(king)
if (false) {
   let king='ram'
  console.log(king)
}

}
if (true) {
  console.log("i am second king " + king)
}
