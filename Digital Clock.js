//Collecting data
const hourE1 = document.getElementById("Hours");
const minuteE1 = document.getElementById("Min");
const secondE1 = document.getElementById("Sec");
const ampmE1 = document.getElementById("ampm");
//calling function
function updateClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM";

    //converting 24 hours to 12 hours
    if(hours > 12){
        hours = hours - 12;
        ampm = "PM";
    }
//adding 0 next to 

hours = hours <10 ? "0" + hours:hours;
minutes = minutes <10 ? "0" + minutes:minutes;
seconds = seconds <10 ? "0" + seconds:seconds;

    //inner-text method
    hourE1.innerText = hours;
    minuteE1.innerText = minutes;
    secondE1.innerText = seconds;
    ampmE1.innerText = ampm;

    //calling function after 1 second
    setTimeout(updateClock, 1000);

    

}
//here we are calling the function
updateClock();