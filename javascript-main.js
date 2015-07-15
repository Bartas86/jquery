$(document).ready(function() {
    console.log('dupa');
});

function myFunction() {
    var x = document.getElementById("logo1")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
}