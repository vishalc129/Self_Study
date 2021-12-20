const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const cicumference = function (radius) {
    return 2 * Math.PI * radius;
}

const dimeter = function (radius) {
    return 2 * radius;
}

const calculate = function (res, radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(res(radius[i]))
    }
    return output;
}

Array.prototype.calculate1 = function (res) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(res(this[i]))
    }
    return output;
}

console.log(radius.calculate1(area));
console.log(radius.map(area));
console.log(calculate(area, radius));
console.log(calculate(cicumference, radius));
console.log(calculate(dimeter, radius));


// const calculateArea = function (radius){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(2 * radius[i])
//     }
//     return output;
// }
// console.log(calculateDiameter(radius)); 