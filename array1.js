//array declaration
// Datatype : Arrays
// const marvel = ['ironMan','spiderMan','deadpool','antMan','capt.America','x-men']
// console.log(marvel)
// console.log(marvel.length)
// console.log(marvel[0])
// console.log(marvel[marvel.length-1])
// console.log(`we have ${marvel.length} super heroes`)

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
console.log(numbers.length);
// console.log(numbers);

// numbers[1]='new_element'
// console.log(numbers);


//start
// numbers.shift()
// console.log(numbers);

// numbers.unshift()
// console.log(numbers.unshift('eswar'));
// console.log(numbers)

// --- shift is deleting first new_element
//---- unshift is adding element in first place

//middle
// numbers.splice(3,2,'splace element')

// 3 - represents third element in Arrays
// 2 - no:of elements to be deleted
// splace element  - the word which inserted in the  deleted place
// splice is ued to inert new word in middle and also delete in middle of the Arrays



//end

numbers.pop()
console.log("The element is to be deleted is " + numbers.pop());
console.log(numbers)

// numbers.push('newOne')
// console.log('the element is pushed is ' + numbers.push())
// console.log(numbers)


// --- push - It is used to enter new value in last
// --- pop - deletes the last element in array
