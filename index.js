let person={
    name:"hoor",
   height:function(Sen){
       console.log(Sen+ this.name)
    }
}
person.height("My name is ")

// let std1={
//     name:"ali",
//     rollno:230,
//     teacher:"Nida",
//     className:"html"
// }

// let std2={
//     name:"alia",
//     rollno:231,
//     teacher:"Nadir",
//     className:"css"
// }
// delete std2.name
// console.log(std2);

let present=localStorage.getItem("Data")
let std=present?JSON.parse(present):[]
function std3(){
   let students={
   name:prompt("Enter name"),
   rollno:+prompt("Enter rollno"),
   teacher:prompt("Enter teacher"),
   className:+prompt("Enter classname")
   }
std.push(students)
console.log(std);
let stringify=JSON.stringify(std)
localStorage.setItem("Data",stringify)
}
let mypara=document.getElementById("mypara")
let m=mypara.innerText="HELLO"
console.log(mypara);

// let mypara = document.querySelector("#mypara");
// mypara.innerHTML = "<b>PAKISTAN ZINDABAD</b>";
// mypara.style.backgroundColor = "#000";
// mypara.style.color = "#fff";
// mypara.style.width = "60%";
// mypara.style.height = "70px";

// setInterval(function () {

//     if (mypara.style.display == "none") {
//         mypara.style.display = "block"
//     }
//     else {
//         mypara.style.display = "none"
//     }

// }, 500)
//         setTimeout(function() {
//   alert("This message will appear after 3 seconds.");
// }, 3000); // 3000 milliseconds = 3 seconds

// let yourpara = document.querySelector("#yourpara");
// yourpara.innerHTML = "<b>DEVELOPER </b>";
// yourpara.style.backgroundColor = "#000";
// yourpara.style.color = "#fff";
// yourpara.style.width = "100%";
// yourpara.style.height = "70px";

// setInterval(function () {
//     let width=yourpara.style.width
//     if(yourpara.style.width == "100%"){
//         yourpara.style.width = "60%"
// }
// else{
//     yourpara.style.width = "60%"
// }
  

//}, 500)