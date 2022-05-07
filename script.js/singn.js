var arr1 = JSON.parse(localStorage.getItem("getsign"))||[]
 
function singnfunc(){
    var arr=[]
var Email=document.querySelector("#email").value;
var User=document.querySelector("#name").value;
var city=document.querySelector("#city").value;
var lang=document.querySelector("#lang").value;
var obj={
Name:User,
Email:Email,
City:city,
Lang:lang

}


// //console.log(arr)

arr.push(obj);
localStorage.setItem("getsign",JSON.stringify(arr))
window.location.href="./index.html"
var  profile = document.querySelector("#profile")
profile.innerHTML=arr1[0].Name
console.log(arr1[0].Name)


}