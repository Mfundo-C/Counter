//set initial count
let count = 0;

//swelect value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
btn.addEventListener("click", function (e) {  //function called on evert list item & (e) to access my evebt object
const styles = e.currentTarget.classList;
if(styles.contains("decrease")) {
    count--;  //decrease the count by 1
}else if(styles.contains("increase")) { //styles = variable

 count++;
} else {
    count = 0;
}

if (count > 0) { //if the value is bigger than 0
    value.style.color = "green";
}

if (count < 0) {
    value.style.color = "red"; //if less than 0
}

if (count === 0) {
    value.style.color = "#222"; 
}

value.textContent = count;
});

});