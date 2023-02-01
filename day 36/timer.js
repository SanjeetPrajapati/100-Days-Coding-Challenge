console.log("SANJEET")
let intervalId;
function Start() {
var Inter;
    let ms = eval(document.getElementById("ms").innerHTML);
    let sec = eval(document.getElementById("sec").innerHTML);
    let min = eval(document.getElementById("min").innerHTML);

    ms = ms + 1;
    document.getElementById("ms").innerHTML = '0' + ms;
    if (ms == 10) {
        ms = 00;
        document.getElementById("ms").innerHTML = ms;
        sec = sec + 1;
        if (sec < 10) {
            document.getElementById("sec").innerHTML = '0' + sec;
        }
        else {
            document.getElementById("sec").innerHTML = sec;
        }

    }

    if (sec == 60) {
        sec = 00;
        document.getElementById("sec").innerHTML = sec;
        min = min + 1;
        document.getElementById("min").innerHTML = min;

        if (min < 10) {
            document.getElementById("min").innerHTML = '0' + min;
        }
        else {
            document.getElementById("min").innerHTML = min;
        }
    }


    // setTimeout(Start, 100)

    // console.log(typeof (disp))
    // clearInterval(Inter);
    // Inter = setInterval(Start, 10);
    // Inter = setInterval(Start, 10);
    intervalId = setTimeout(Start, 10);

    // setTimeout(Start,10)
    // Stop() 
}
// setInterval(Start , 5)
// clearTimeout

function Stop() {
    clearTimeout(intervalId);
    

}

function Reset(){
    clearTimeout(intervalId);
    // ms=00;
    document.getElementById("ms").innerHTML = "00";
    // sec=00;
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    // min=00;
    console.log("reset button")
}
