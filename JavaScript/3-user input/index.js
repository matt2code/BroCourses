//window prompt (easy way)
//let username = window.prompt("Provide a name:");
//console.log(username);

//html textbox (difficult way, but more practical)
let username;
document.getElementById("confirmBtn").onclick = function(){ //acesses the document and fires a function after clicking on the element with the "confirmBtn" id.
    username = document.getElementById("namePrompt").value; //assigns the value inside the element with the "namePrompt" id.
    console.log(username); //displays the assigned username

    document.getElementById("labelHello").innerHTML = "Hello " + username; //changes the INNER content of the element with the "labelHello" id.
}
