
        function add() {
            const first = parseInt(document.getElementById("first").value);
            const second = parseInt(document.getElementById("second").value);
            document.getElementById("result").value = first + second;
            console.log("sum is " + (first + second))

        }
        function subtract() {
            const first = parseInt(document.getElementById("first").value);
            const second = parseInt(document.getElementById("second").value);
            document.getElementById("result").value = first - second;

            console.log("diffrence is " + (first - second))
        }
        function multi() {
            const first = parseInt(document.getElementById("first").value);
            const second = parseInt(document.getElementById("second").value);
            document.getElementById("result").value = first * second;

            console.log("multiplication is " + (first * second))
        }
        function divide() {
            const first = parseInt(document.getElementById("first").value);
            const second = parseInt(document.getElementById("second").value);
            document.getElementById("result").value = first / second;

            console.log("div is " + (first / second))
        }
        if (first.value && second.value === ' ') {
            document.getElementById("result").value = 'enter number plz ';
        }