const today = new Date();
const day = today.getDay();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let c;
if(hours>=12){
    c = "AM";
}
else
{
    c = "PM";
}
if(hours>=12)
{
    hours = hours - 12;
}
else
{
    hours = hours;
}
if(hours === 0 && c === "AM")
{
    if(minutes === 0 && seconds === 0)
    {
        hours = 12;
        c = "Midnight";
    }
    else
    {
        hours = 12;
        c = "AM";
    }
}
if(hours === 0 && c === "PM")
{
    if(minutes === 0 && seconds === 0)
    {
        hours = 12;
        c = "Noon";
    }
    else
    {
        hours = 12;
        c = "AM";
    }
}
const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
];
console.log("Today is:" + daylist[day]);
console.log("Current time is:" + hours + ":" + minutes + ":" + seconds + c);
console.log("Date:" +date + "-" + month + "-" + year);