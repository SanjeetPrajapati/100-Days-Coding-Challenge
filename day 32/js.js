function clr() {
    document.getElementById("screen").innerHTML = " ";
}

function btn(val) {
    const scr = document.getElementById("screen");
    scr.innerHTML = scr.innerHTML + val;
}
function equal() {
    var scr = document.getElementById("screen").innerHTML;
    var new_scr = eval(scr);
    document.getElementById("screen").innerHTML = new_scr;
}


