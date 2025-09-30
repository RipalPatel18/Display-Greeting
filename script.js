var today = new Date();

console.log("Current date and time:", today);


var hour = today.getHours();
var day = today.getDay();
var greeting = "";


if (day === 1) {
    greeting = "Do you have a case of the Mondays?";
}

else if (day === 5 && hour >= 12) {
    greeting = "It’s almost the weekend!";
}

else if (hour < 12) {
    greeting = "Have a good morning!";
}

else if (day === 0 || day === 6) {
    greeting = "It’s the weekend!!!";
}


else {
    greeting = "Have a good day!";
}