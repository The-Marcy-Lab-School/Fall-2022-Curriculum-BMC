function scopeExample1() {
    let x = 10;
    console.log(x);
    {
        let y = 20;
        console.log(x, y);
        {
            let z = 30;
            console.log(z);
        }
        console.log(x, y);
    }
    console.log(x);
}



function scopeExample2() {
    let x = 10;
    {
        let x = 20;
        {
            console.log(x);
        }
        console.log(x);
    }
    console.log(x);
}


function parameterScope() {
    const name = "Ben";

    function greet(name) {
        return `Hello ${name}!`;
    }

    console.log(greet("Sammy"));
}


function callStackExample() {
    function add(a, b) {
        return a + b;
    }

    function divide(a, b) {
        return a / b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function convertCelsiusToFahrenheit(c) {
        // f = ((9/5) * c) + 32
        const f = add(multiply(divide(9, 5), c), 32);
        return f;
    }

    console.log(convertCelsiusToFahrenheit(100)); // 212
    console.log(convertCelsiusToFahrenheit(0)); // 32
}