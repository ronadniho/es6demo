console.log('----------对象赋值------------')
let name = 'jdk';
let skill = 'web';
let obj = { name, skill }
console.log(obj)


console.log('----------key值的构建------------')
let key = 'yes';
var obj2 = {
    [key]: 'web'
}
console.log(obj2)


console.log('----------js()------------')
let obj3 = { name: 'java' }
let obj4 = { name: 'java' }
console.log(obj3.name === obj4.name)
console.log(Object.is(obj3.name, obj4.name))

/* ===同值相等，is严格相等 */
console.log(+0 === -0)
console.log(Object.is(+0, -0))
console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))

console.log('----------assign------------')
let a = { a: 'js' };
let b = { b: 'java' };
let c = { c: 'jsp' }
let d = Object.assign(a, b, c);
console.log(d)