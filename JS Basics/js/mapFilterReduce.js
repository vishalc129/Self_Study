const arr = [5, 1, 3, 2, 6];

const double = function (val) {
    return val * 2;
}

const binary = function (val) {
    return val.toString(2);
}

// ***Map******Map******Map******Map******Map******Map******Map***
console.log(arr.map(double));    //[10, 2, 6, 4, 12]
console.log(arr.map(binary));    //['101', '1', '11', '10', '110']

//Similar way calling above function
console.log(arr.map(function (val) {
    return val * 2;
}));                            //[10, 2, 6, 4, 12]
console.log(arr.map((val) => {
    return val.toString(2);
}));                            //['101', '1', '11', '10', '110']
console.log(arr.map(val => val * 2)); //[10, 2, 6, 4, 12]

// ***Filter******Filter******Filter******Filter******Filter******Filter******Filter***
function isOdd(val) { return val % 2 }

function isEven(val) { return val % 2 === 0 }

console.log(arr.filter(isOdd));  //[5, 1, 3]
console.log(arr.filter(isEven)); //[2, 6]

// ***Find******Find******Find******Find******Find******Find******Find***
console.log(arr.find(isEven)); //2

// ***Reduce******Reduce******Reduce******Reduce******Reduce******Reduce******Reduce***
//Find Sum of array
console.log(arr.reduce((accumulator, current) => accumulator += current, 0))                   //17

//Find max number from an array
console.log(arr.reduce((accumulator, current) => {
    if (accumulator < current) {
        accumulator = current
    }
    return accumulator;
}, 0));     //6


const names = [{ id: 1, firstName: 'Vishal', lastname: 'Chavan', age: 30 },
{ id: 2, firstName: 'Forrest', lastname: 'Gump', age: 75 },
{ id: 3, firstName: 'Jordan', lastname: 'Belfort', age: 50 },
{ id: 4, firstName: 'Chris', lastname: 'Gardner', age: 40 },
{ id: 5, firstName: 'Vishu', lastname: 'Chavan', age: 30 }]

console.log(names.map(name => name.firstName + ' ' + name.lastname));  //['Vishal Chavan', 'Forrest Gump', 'Jordan Belfort', 'Chris Gardner', 'Vishu Chavan']

console.log(names.reduce((accumulator, current) => {
    accumulator[current.age] ? accumulator[current.age] = ++accumulator[current.age] : accumulator[current.age] = 1;
    return accumulator
}, {}));      //{30: 2, 40: 1, 50: 1, 75: 1}

console.log(names.filter(name => name.age === 30).map(name=>name.firstName));   // ['Vishal', 'Vishu']
console.log(names.reduce((accumulator,current)=>{
    current.age === 30 ? accumulator.push(current.firstName): null;
 return accumulator;
},[]))                                                                          // ['Vishal', 'Vishu']









































