// declaration of own function

let name = function(name){
  console.log(`greeting msg to ${name}`)
  console.log(`hey ${name}`)
}
name('eswar')

let fullName = function (firstName,lastName) {
    console.log(`welcome to sign-up page`)
    console.log(`enter your first & last names, ${firstName} ${lastName}`)

}
fullName ('Mullapudi','Eswar')

let number = function (number) {
  console.log(`enter number ${number}`)
}
number('3')

let adding = function (num1,num2) {
  let added = num1 + num2
  return added
}

// let result = adding(3,2)
// console.log(result)


console.log('added elements total is :' + adding(3,2))

// multiplicatoin
let multiplicatoin = function (num1,num2) {
  return num1 * num2

}
console.log(`multiplied total is:` + multiplicatoin(3,2));

let guestUser = function(name,courseCount){
  return 'helo ' + name + ' and your courseCount is: ' + courseCount

}
console.log(guestUser('eswar',1))
