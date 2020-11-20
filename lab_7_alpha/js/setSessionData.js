const main = document.getElementById("main");

/*
fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
        console.log("name: "+ data.name);
        console.log("id: "+ data.id);
    })
*/
/*
fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then(resp => resp.json())
    .then(data => {
        sessionStorage.setItem("sid", data.id);

        console.log(data);
        console.log("name: "+ data.name);
        console.log("id: "+ data.id);
    })
*/

document.getElementById("courseId").placeholder = "1-12";

function getClasses(){
    
    let classId =  document.getElementById("courseId").value; // Your code here

    if(typeof classId !== "undefined" & classId !== ""){
        
        //let classURL =  "https://api.umd.io/v0/courses/" + classId; // Your code here
        let classURL = "https://reqres.in/api/users/" + classId;
        // YOUR CODE HERE

        fetch(classURL)
        .then(resp => resp.json())
        .then(data => {
            sessionStorage.setItem("fName", data.data.first_name);
            sessionStorage.setItem("lName", data.data.last_name);
            sessionStorage.setItem("email", data.data.email);

            console.log('data: ' + data);
            console.log('data.data: ' + data.data);
            console.log('data.data.id: ' + data.data.id);
            console.log('data.data.email: ' + data.data.email);
        })
        .catch((error) => main.innerHTML = "Invalid input. Try again.")
    }
    else{
        main.innerHTML = "No value provided";
    }
}