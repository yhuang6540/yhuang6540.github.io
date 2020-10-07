let myFullName = "Yuming Huang"; // 11 characters in name...not including space

// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const myHeading = document.querySelector('.header');
myHeading.textContent = myFullName + "'s Lab 4";
//document.querySelector('.header').textContent = "Yuming's Lab 4";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let firstPar = document.createElement('p');
firstPar.className = 'content1';
let secondPar = document.createElement('p');
secondPar.className = 'content2';
document.querySelector('.content').append(firstPar, secondPar);


// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
firstPar.innerText = "my name has " + (myFullName.length - 1) + " characters";

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
secondPar.innerText = "the third character in my name is " + myFullName.slice(2,3).toUpperCase();

// 6 Add a new line to your second paragraph
secondPar.innerText += "\n";

// 7 Return the final three characters of your last name to that new line
secondPar.innerText += myFullName.slice(myFullName.length-3);

// 8 Substring your first and last name into two separate variables
let firstName = myFullName.slice(0, 6);
let lastName = myFullName.slice(7);
//let firstName = myFullName.slice(0, myFullName.indexOf(' '));
//let lastName = myFullName.slice(myFullName.indexOf(' ')+1);

// 9 Add the total length of your first and last names together
let total = firstName.length + lastName.length;

// 10 Display that total next to your name in your header
myHeading.innerText += " Total length of my name: " + total;

