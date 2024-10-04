// Function to return the current date and time components separately
function returnDateAndTime() {
    const today = new Date();

    const year = today.getFullYear();       // Get year
    const month = today.getMonth() + 1;     // Get month (0-11, so we add 1)
    const day = today.getDate();            // Get day
    const hour = today.getHours();          // Get hours (0-23)
    const minute = today.getMinutes();      // Get minutes (0-59)
    const second = today.getSeconds();      // Get seconds (0-59)
