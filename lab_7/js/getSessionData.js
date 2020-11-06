// Get saved data from sessionStorage
let title = sessionStorage.getItem("title"); // Your code here
let lat_max = sessionStorage.getItem("lat_max");
let lat_min = sessionStorage.getItem("lat_min");
let lon_max = sessionStorage.getItem("lon_max");
let lon_min = sessionStorage.getItem("lon_min");

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
if(!(title == "undefined" || title == null)){
    document.getElementById("title").innerText = title;
    document.getElementById("lat_max").innerText = lat_max;
    document.getElementById("lat_min").innerText = lat_min;
    document.getElementById("lon_max").innerText = lon_max;
    document.getElementById("lon_min").innerText = lon_min;
}

//to clear the saving and content when go back to home page
document.querySelector("a").onclick  = function(){
    sessionStorage.removeItem("title");
}