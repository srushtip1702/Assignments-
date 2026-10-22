
function calculateArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    "Standard Function Area (Default 5x4):",
    calculateArea()
);

// Arrow function with parameters
const calculateAreaArrow = (length = 5, width = 4) => length * width;

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateAreaArrow(10, 3)
);

// Demonstrating function and block scope
function testScope() {
    var functionVar = "I am function-scoped";

    if (true) {
        let blockVar = "I am block-scoped";
        console.log("Inside block:", blockVar);
    }

    console.log("Function scope:", functionVar);

    try {
        console.log(blockVar);
    } catch (error) {
        console.log(
            "Scope Test Error:",
            error.name + ": " + error.message,
            "(when accessed outside block)"
        );
    }
}

testScope();
