var newarr = JSON.parse(localStorage.getItem("cart")) || []
var bagitems= document.querySelector("#bagitems")
bagitems.innerHTML= newarr.length

// =============================================
var arr1 = JSON.parse(localStorage.getItem("getsign"))
if(arr1[0].Name!==""){
  var  profile = document.querySelector("#profile")
  profile.innerHTML=arr1[0].Name
  console.log(arr1[0].Name)
  var  profiles = document.querySelector("#profiles")
  profiles.innerHTML=arr1[0].Name
  console.log(arr1[0].Name)
}
