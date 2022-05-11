// ES5 assigning variables to object properties
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// es6 way:
const obj = {numbers:{a:1,b:2}};
const {numbers:{a,b}} = obj;

// ES5 array swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// es6
const arr = [1,2];
[arr[0],arr[1]] = [arr[1],arr[0]];

// raceResults
const raceResults = ({first,second,third,...rest}) => ({first,second,third,rest});
