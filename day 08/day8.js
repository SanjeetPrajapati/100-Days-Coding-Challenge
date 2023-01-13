function clock () 
{
var time = new Date();
var hr = document.getElementById("hour").innerHTML = time.getHours();
document.getElementById("min").innerHTML = time.getMinutes();
document.getElementById("sec").innerHTML = time.getSeconds();
if(hr >= 12)
{
    document.getElementById("AmPm").textContent= 'PM';
}
else{
    document.getElementById("AmPm").textContent= 'AM';
}
}
setInterval(clock , 5); // call out finction after 5 ms;