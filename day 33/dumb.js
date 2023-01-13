function move() {

    const no = document.getElementById("no");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    console.log("I think you are dumb !")
    if (right.innerHTML == "") {
        right.innerHTML = left.innerHTML;
        left.innerHTML = "LOL! you are ...";
    }
    else {
        left.innerHTML = right.innerHTML;
        right.innerHTML = "LOL! you are ...";
    }
}
function yes() {
    alert("I know you are Dumb ! I just reminding you 😅😅");
    document.getElementById("left").innerHTML=""
    document.getElementById("scrn").style.backgroundImage ="url(' download.jfif')"
}

