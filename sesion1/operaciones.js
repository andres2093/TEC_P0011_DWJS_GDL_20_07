function sumar(num1, num2) {
    console.log("Sumar");
    console.log(num1 + num2);
}

function restar(num1, num2) {
    console.log("Restar");
    console.log(num1 - num2);
}

function random(min, max, decimals){
    let presition = Math.pow(10, decimals)
    min = min * presition
    max = max * presition
    return Math.floor(Math.random() * (max - min + 1) + min) / presition;
}

// module.exports = sumar;
// module.exports = restar;

module.exports = {
    sumar,
    restar,
    random
};