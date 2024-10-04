// Function to return the current date and time components separately
function returnDateAndTime() {
    const today = new Date();

    const year = today.getFullYear();       // Get year
    const month = today.getMonth() + 1;     // Get month (0-11, so we add 1)
    const day = today.getDate();            // Get day
    const hour = today.getHours();          // Get hours (0-23)
    const minute = today.getMinutes();      // Get minutes (0-59)
    const second = today.getSeconds();      // Get seconds (0-59)

    
    // Print them separately
    console.log('Year: ' + year);
    console.log('Month: ' + month);
    console.log('Day: ' + day);
    console.log('Hour: ' + hour);
    console.log('Minute: ' + minute);
    console.log('Second: ' + second);

    // Return an object with the date and time components
    return { year, month, day, hour, minute, second };
}

console.log(returnDateAndTime());

// Write a function that generates a random number between 1 and 100.
function takeRandomNumber(){
    return Math.floor(Math.random()*100)
}
console.log(takeRandomNumber())