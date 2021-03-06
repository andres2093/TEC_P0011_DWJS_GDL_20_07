const operador = process.argv[2]
const num1 = parseInt(process.argv[3])
const num2 = parseInt(process.argv[4])

switch (operador) {
    case "+":
        console.log(num1, operador, num2, " = ", num1 + num2);
        break;
    case "-":
        console.log(num1, operador, num2, " = ", num1 - num2);
        break;
    case "x":
        console.log(num1, operador, num2, " = ", num1 * num2);
        break;
    case "/":
        console.log(num1, operador, num2, " = ", num1 / num2);
        break;
    default:
        console.log("Error");
        break;
}