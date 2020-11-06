// Get saved data from sessionStorage
let name = sessionStorage.getItem("fName"); // Your code here
let semester =  sessionStorage.getItem("lName"); // Your code here
let credits =  sessionStorage.getItem("email"); // Your code here
let description =  ""; // Your code here 

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above

console.log(name);
console.log(typeof name);

if(!(name == "undefined" || name == null)){
    document.getElementById('name').innerText = name;
    document.getElementById('semester').innerText = semester;
    document.getElementById('credits').innerText = credits;
}

//to clear the saving and content when go back to home page
/*
document.querySelector("a").onclick  = function(){
    sessionStorage.removeItem("fName");
}
*/