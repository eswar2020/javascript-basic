// && -Both sides must be true
// \\ - One is enough to be true

let gmailVerification = true;
let haspaid = false;
let isLogin = true;
let isGest = false;

if(!gmailVerification && haspaid && isLogin){
console.log("welcome to your course")
console.log("grant acess to paid login page")

}else if (gmailVerification || isGest) {
  console.log("wlcome to guest page")
  console.log("access to only free stuff for guest")
}else {
  console.log("please contact admin")
}
