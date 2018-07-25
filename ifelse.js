//IF-ELSE

var whoIsHere ='x'

if(whoIsHere === 'student'){
  console.log("welcome student")
  console.log("enter your login details")
}
else if (whoIsHere =='teacher') {
  console.log("welcome teacher")
  console.log("enter your signature to enter to digital class room")
}
else {
  console.log("your details are wrong!")
  console.log("please check your detals ")
}

// Grading
//10 - amazing
//8 - good
//5 - average
//2 - poor

var myMarks = 5;

if(myMarks === 10){
  console.log("amazing")
}
else if (myMarks === 8) {
  console.log("good")
}
else if (myMarks === 5) {
  console.log("average")
}
else if(myMarks === 2){
  console.log("poor")
}
else if(myMarks === 0){
  console.log("fail")
}
else{
  console.log("wrong INPUT DUDE")
}
