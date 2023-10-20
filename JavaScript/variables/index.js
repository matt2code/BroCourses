var firstName = "Nepu"; //strings
let age = 20; //numbers
let employee = false; //booleans

age = age + 1;

console.log("This is", firstName)
console.log("He's", age, "years old");
console.log("Employed:", employee);

document.getElementById("p1").innerHTML = "This is " + firstName;
document.getElementById("p2").innerHTML = "He's " + age + " years old";
document.getElementById("p3").innerHTML = "Employed: " + employee + " :(";