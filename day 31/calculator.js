function ans() {
    const first = parseInt(document.getElementById("first").value);
    const second = parseInt(document.getElementById("second").value);
    const Operator = document.getElementById("Operator").value;
    const output = document.getElementById("output");


    if (isNaN(first) == true || isNaN(second) == true) {
        document.getElementById("display").innerText = "Please Enter number";
        output.value = "Error ! Please Enter number";
        document.getElementById("display").style.backgroundColor = " rgb(247, 141, 141) ";

    }
    else {
        document.getElementById("display").style.backgroundColor = "  greenyellow  ";
        switch (Operator) {
            case '+':
                document.getElementById("display").innerText = "sum of " + first + " and " + second + " is  : "
                output.value = first + second;
                break;

            case '-':
                document.getElementById("display").innerText = "diffrence of " + first + " and " + second + " is  : "
                output.value = first - second;
                break;
            case '/':
                document.getElementById("display").innerText = "division of " + first + " and " + second + " is  : "
                output.value = first / second;
                break;

            case '*':
                document.getElementById("display").innerText = "multiplication  of " + first + " and " + second + " is  : "
                output.value = first * second;
                break;

            case 'select':

                document.getElementById("display").innerText = "Plese select operator  ";
                output.value = "Error !";

                document.getElementById("display").style.backgroundColor = " rgb(247, 141, 141) ";
                break;


        }
        
    }
}