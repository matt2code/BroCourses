let age;
document.getElementById("confirmBtn").onclick = function() {
    age = document.getElementById("agePrompt").value;

    console.log(typeof age); //displays the variable type of age BEFORE conversion
    age = Number(age) //converts the string to a number
    console.log(typeof age); //displays the variable type of age AFTER conversion
    age += 1;

    document.getElementById("labelAge").innerHTML = "Happy Birthday! You're " + age + " years old"
}

//constructors
let x, y, z;
x = Number("3.14"); //number constructor. if not a number returns NaN (not a number)
y = String(3.14); //string constructor
z = Boolean("pudding"); //boolean constructor. if empty returns false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);