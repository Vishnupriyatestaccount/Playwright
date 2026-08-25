interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
};

console.log("Add:", calc.add(5, 2));
console.log("Subtract:", calc.subtract(10, 3));
console.log("Multiply:", calc.multiply(4, 5));