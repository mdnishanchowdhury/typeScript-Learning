import { a } from './file2';
const { a: b } = require('./file3');

const { add,subs } = require('./index');


console.log(add(a,b))
console.log(subs(a,b))

