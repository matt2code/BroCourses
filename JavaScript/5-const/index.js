/* 
 *   let's calculate the circumference of a circle
 *      C = 2 π r
 *      r = radius
*/

const PI = 3.14159; //making uppercase is just good practice
let radius; //will return undefined
let circumference;
//both radius and circumference cant be const, because we change them later in the program

console.log(typeof radius);
radius = Number(radius);
console.log(typeof radius);

//PI = 420.69; //gets reassigned if its let, making the semantic of the code wrong
//if the typeof PI is const and gets reassigned, returns exception

document.getElementById("calculateBtn").onclick = function() {
    radius = document.getElementById("radiusPrompt").value;
    circumference = 2 * PI * radius
    console.log(typeof circumference)

    document.getElementById("resultLabel").innerHTML = circumference
}