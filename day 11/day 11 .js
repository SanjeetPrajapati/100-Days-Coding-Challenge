//  SANJEET !!
let a = confirm("Do yoou want to add 2 numbber ? !!!");
if (a == true) {
    alert("This will add two number !! ");
    const one = parseInt(prompt("First number ?"));
    const two = parseInt(prompt("Second number ?"));
    const sum = parseInt(one + two);
    document.write("  sum of ", one, "  and  ", two, " is ", sum);
    document.body.style.fontSize= "15vh";
    document.getElementById("remove").innerHTML= " ";
}
else {
    alert("Error !! refresh your page");
    
}
