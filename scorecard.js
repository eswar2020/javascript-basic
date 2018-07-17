let myScoreCard = function(presentMarks,totalMarks) {
   // return 'presentmarks are ' + presentMarks + ' and totalmarks are '+ totalMarks
   let myPercent = (presentMarks/totalMarks) *100

let myGrade = ''

if (myPercent >= 90) {
    myGrade='a'

}
else if (myPercent >= 70) {
  myGrade = 'b'
}
else if (myPercent >= 60) {
  myGrade = 'c'
}
else if (myPercent >= 40) {
  myGrade = 'd'
}
else {
  myGrade= 'f'
}
return `my grade is ${myGrade} and percentage is ${myPercent}`
}

let yourResult = myScoreCard(92,200)

console.log(yourResult);
