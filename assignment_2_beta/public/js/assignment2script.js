/*
 ------ SUBMIT NEW TASK ------
*/
function submitTask() {
  console.log("Called submitTask");

  let taskNameParam = document.getElementById("taskName").value;
  let taskDueDate = document.getElementById("taskDueDate").value;
  let group = document.getElementById("group").value;
  let person = document.getElementById("firstName").value;
  let priority = document.getElementById("priority").value;

  console.log("TaskName:" + taskNameParam);
  console.log("taskDueDate:" + taskDueDate);
  data = { 
    'taskDueDate': taskDueDate, 
    'taskName': taskNameParam, 
    'group': group, 
    'person': person, 
    'priority': priority 
  };

  console.log(JSON.stringify(data))
  let taskURL = "/task";
  const fetchPromise = fetch(taskURL, {
    method: 'POST', headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, body: JSON.stringify(data)
  });

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here POST");
      console.log(task);
      let taskId, taskName, taskDate;
      let message = "ERROR: " + task.message;
      if (typeof task.id !== "undefined") {
        taskName = task.data.name;
        taskId = task.id;
        taskDueDate = task.data.dueDate;
        message = "Message: " + task.message + " ID: " + taskId + "<br>TaskName: " + taskName + "<br> Due Date: " + taskDueDate;
      }
      document.getElementById("postTaskContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("postTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
    });

}

/*
 ------  GET TASK BY ID ------
*/
function getTask() {
  console.log("Called getTask");

  let taskIdParam = document.getElementById("taskId").value;
  console.log("TaskId:" + taskIdParam);
  let taskURL = "/task?taskId=" + taskIdParam;
  const fetchPromise = fetch(taskURL);

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here");
      console.log(task);
      let taskId, taskName, taskDate;
      let message = "ERROR";
      if (typeof task.data.id !== "undefined") {
        taskName = task.data.taskName;
        taskId = task.data.id;
        taskFirstName = task.data.firstName;
        taskGroupName = task.data.groupName;
        taskPriority = task.data.priority;
        taskDueDate = task.data.dueDate;
        taskComplete = task.data.complete;
        message = "ID: " + taskId + "<br>TaskName: " + taskName 
           +  "<br>Group Name: " + taskGroupName
           + "<br>FirstName: " + taskFirstName 
           + "<br>TaskPriority: " + taskPriority
           + "<br>TaskComplete: " + taskComplete
           +  "<br> Due Date: " + taskDueDate;
      }
      document.getElementById("getTaskContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("getTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
    });

}

/*
 ------  GET TASK To UPDATE BY ID ------
*/
function getTaskToUpdate() {
  console.log("Called getTaskToUpdate");

  let taskIdParam = document.getElementById("taskToUpdateId").value;
  console.log("TaskId:" + taskIdParam);
  let taskURL = "/task?taskId=" + taskIdParam;
  const fetchPromise = fetch(taskURL);
  let message = "";
  
  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here");
      console.log(task);
      let taskId, taskName, taskPriority, taskDueDate, taskComplete,taskPersonId, taskGroupId;
      let message = "ERROR";
      if (typeof task.data.id !== "undefined") {
        taskName = task.data.taskName;
        taskId = task.data.id;
        taskDueDate = task.data.dueDate;
        taskPriority = task.data.priority;
        taskComplete = task.data.complete;
        taskPersonId = task.data.personId;
        console.log("taskPersonId:" + taskPersonId);
        taskGroupId = task.data.groupId;
        //message = "ID: " + taskId + "<br>TaskName: " + taskName + "<br> Due Date: " + taskDueDate;
        message = "";
        document.getElementById("updateTaskName").value = taskName;
        document.getElementById("updatefirstName").selectedIndex = taskPersonId;
        document.getElementById("updategroup").selectedIndex = taskGroupId;
        document.getElementById("updateTaskId").value = taskId;
        document.getElementById("updateTaskDueDate").value = taskDueDate;
        document.getElementById("updateTaskPriority").value = taskPriority;
        document.getElementById("updateTaskComplete").selectedIndex = taskComplete;
        
      }
      else{
        document.getElementById("updateTaskName").value = "";
        document.getElementById("updateTaskId").value = "";
        document.getElementById("updateTaskDueDate").value = "2020-11-30";
        document.getElementById("updateTaskComplete").value = "";
 
        message = "ERROR";
      }
      //document.getElementById("updatedTaskContent").innerHTML = message;
      
      
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("updatedTaskContent").innerHTML = "<font color=red>Invalid task id: " + taskIdParam + "</font>";
    });

}
/*
 ------ UPDATE TASK BY ID ------
*/
function updateTask() {
  console.log("Called updateTask");

  let updateTaskId = document.getElementById("updateTaskId").value;
  let updateTaskName = document.getElementById("updateTaskName").value;
  let updateTaskFirstName = document.getElementById("updatefirstName").value;
  let updateTaskGroup = document.getElementById("updategroup").value;
  let updateTaskDueDate = document.getElementById("updateTaskDueDate").value;
  let updateTaskPriority = document.getElementById("updateTaskPriority").value;
  let updateTaskComplete = document.getElementById("updateTaskComplete").value;
  console.log("TaskId:" + updateTaskId);
  console.log("TaskName:" + updateTaskName);
  console.log("updateTaskFirstName:" + updateTaskFirstName);
  console.log("updateTaskGroup:" + updateTaskGroup);
  console.log("updateTaskDueDate:" + updateTaskDueDate);
  console.log("updateTaskPriority:" + updateTaskPriority);
  console.log("updateTaskComplete:" + updateTaskComplete);
  data = { 'taskId': updateTaskId,
          'taskName':updateTaskName,
          'taskFirstName':updateTaskFirstName,
          'taskGroup':updateTaskGroup,
          'taskDueDate':updateTaskDueDate,
          'taskPriority': updateTaskPriority,
          'taskComplete':updateTaskComplete };

  console.log(JSON.stringify(data))
  let taskURL = "/task?taskId=" + updateTaskId;

  const fetchPromise = fetch(taskURL, {
    method: 'PUT', headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, body: JSON.stringify(data)
  });

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here Update");
      console.log(task);
      let taskId, taskName, taskDate;
      let message = "ERROR";
      if (typeof task.data.id !== "undefined") {
        taskName = task.data.taskName;
        taskId = task.data.id;
        message = "ID: " + taskId + "<br>TaskName: " + taskName;
      }
      document.getElementById("updatedTaskContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("updatedTaskContent").innerHTML = "Invalid task id: " + updateTaskId;
    });

}

/*
 ------ DELETE TASK BY ID ------
*/
function deleteTask() {
  console.log("Called deleteTask");

  let taskIdParam = document.getElementById("deleteTaskId").value;
  console.log("TaskId:" + taskIdParam);

  let taskURL = "/task?taskId=" + taskIdParam;
  const fetchPromise = fetch(taskURL, { method: 'DELETE' });

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here Delete");
      console.log(task);
      let taskId = "";
      let message = "ERROR";
      if (typeof task.message !== "undefined") {
        message = task.message;
      }
      document.getElementById("deleteTaskContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("deleteTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
    });

}

/*
 ------ ADD NEW PERSON ------
*/
function submitNewPerson() {

  console.log("Called submitNewPerson");
  let firstName = document.getElementById("addFirstName").value;

  console.log("firstName:" + firstName);
  data = { 'firstName': firstName };

  //console.log(JSON.stringify(data))
  let personURL = "/person";
  const fetchPromise = fetch(personURL, {
    method: 'POST', headers: {
      'Content-Type': 'application/json'

    }, body: JSON.stringify(data)
  });

  let personId;
  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((person) => {
      console.log("Here POST person");
      console.log(person);

      let message = "ERROR";
      if (typeof person.id !== "undefined") {
        firstName = person.data.firstName;
        personId = person.id;
        message = "Message: " + person.message + " firstName: " + firstName + "<br>personId: " + personId + "<br> ";
      }
      else if(typeof person !== "undefined"){
        message = "Message: " + person.message ;
      }
      document.getElementById("postNewPersonContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("postNewPersonContent").innerHTML = "Invalid person : " + data.firstName;
    });

}

/*
   ------------   Code for onload of page ------------
   1) Fills out drop down boxes
*/
function addPTag() {
  let pTag = document.createElement("P");   // Create a <p> element
  pTag.innerHTML = "Added paragraph";       // Insert text
  document.body.appendChild(pTag);          // Append <p> to <body>
}

let groupValues = [];
let settings = { method: "Get" };

async function getPageData(prepend = "") {
  await fetch('./allGroups', settings)
    .then(res => res.json())
    .then((json) => {
      let listSize = json.data.length;
      json.data.forEach(element => {
        let optionTag = document.createElement("option");   // Create a <p> element
        let groupName = prepend + "group"
        optionTag.innerHTML = element.name;       // Insert text
        optionTag.setAttribute("value", element.id);
        document.getElementById(groupName).appendChild(optionTag);          // Append <p> to <body>
      });
    })

  await fetch('./allPeople', settings)
    .then(res => res.json())
    .then((json) => {
      let listSize = json.data.length;
      json.data.forEach(element => {
        let optionTag = document.createElement("option");   // Create a <p> element
        let personName = prepend + "firstName"
        optionTag.innerHTML = element.firstName;       // Insert text
        optionTag.setAttribute("value", element.id);
        document.getElementById(personName).appendChild(optionTag);          // Append <p> to <body>
      });
    })

};

window.onload = async function loadPage() {
  getPageData();
  getPageData("update");


}

/*
----- Add New Group -----
*/

function submitNewGroup() {

  console.log("Called submitNewGroup");
  let groupName = document.getElementById("addGroupName").value;

  console.log("groupName:" + groupName);
  data = { 'name': groupName };

  //console.log(JSON.stringify(data))
  let groupURL = "/group";
  const fetchPromise = fetch(groupURL, {
    method: 'POST', headers: {
      'Content-Type': 'application/json'

    }, body: JSON.stringify(data)
  });
  
  let groupId;
  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((group) => {
      console.log("Here POST group");
      console.log(group);
      let message = "ERROR";
      if (typeof group.id !== "undefined") {
        groupName = group.data.name;
        groupId = group.id;
        message = "Message: " + group.message + " groupName: " + groupName + "<br>groupId: " + groupId + "<br> ";
      }
      else if(typeof group !== "undefined"){
        message = "Message: " + group.message ;
      }
      document.getElementById("postNewGroupContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("postNewGroupContent").innerHTML = "Invalid group : " + data.groupName;
    });

}

/**************************
------ Search Task ------
**************************/

//let url = "https://www.reddit.com/r/popular.json";
//let url = "https://api.umd.io/v0/bus/routes";
//let url = "/allPeople"; //local test
let url = "/allTasks"
const tasksArray = [];

fetch(url)
    .then(blob => blob.json())
    .then(data => tasksArray.push(...data.data))

function findMatches(wordToMatch, tasksArray){
  return tasksArray.filter(mission => {
    const regex = new RegExp(wordToMatch, 'gi');
    return mission.taskName.match(regex)


  });
}

function displayMatches(){
  if(document.getElementById('searchTask').value != ""){
  const matchArray = findMatches(this.value, tasksArray);
  const html = matchArray.map(mission =>{
    const regex = new RegExp(this.value, 'gi');
    const missionName = mission.taskName.replace(regex, `<span class="highlight">${this.value}</span>`);
    return `
      <dt>
        <span class="mission">${missionName}</span>
      </dt>
    `;
  }).join('');
  suggestions.innerHTML = html;
  }
  else{
    suggestions.innerHTML = "";
  }
}

const searchInput = document.getElementById('searchTask');
const suggestions = document.querySelector('.suggestions');

//searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);