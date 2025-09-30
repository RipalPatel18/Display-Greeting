// Get the current date
var today = new Date();


console.log("Current date and time:", today);


var hour = today.getHours(); 
var day = today.getDay();   


document.write("<p>Day of the week: " + day + "</p>");
document.write("<p>Hour of the day: " + hour + "</p>");

var greeting = "";

// Determine the appropriate greeting
if (day === 0 || day === 6) {
    // Weekend (Saturday = 6, Sunday = 0)
    greeting = "It’s the weekend!!!";
} else if (day === 1) {
    // Monday
    greeting = "Do you have a case of the Mondays?";
} else if (day === 5 && hour >= 12) {
    // Friday afternoon
    greeting = "It’s almost the weekend!";
} else if (hour < 12) {
    // Before noon
    greeting = "Have a good morning!";
} else {
    // Any other afternoon on a weekday
    greeting = "Have a good day!";
}


document.getElementById("greeting-message").innerText = greeting;
