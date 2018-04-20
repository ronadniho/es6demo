console.log('------------symbol类型---------------')
let a = new String;
let b = new Number;
let c = new Boolean;
let d = new Array;
let e = new Object;
let f = new Function;

let g = Symbol();
console.log(typeof (g))

console.log('---------------------------')
let js = Symbol('jsp');
console.log(js)//symbol类型
console.log(js.toString())//string类型

let syj = Symbol();
let obj = {
    [syj]: 'jsp'
}
console.log(obj[syj]);//symbol用obj[syj]读值不要用obj.syj
obj[syj] = 'web';
console.log(obj[syj]);

console.log('-----------保护age属性----------------')
let obj2 = { name: 'jsp', skill: 'web' };
let age = Symbol();
obj2[age] = 18;
console.log(obj2)
for (let item in obj2) {
    console.log(obj2[item])
}
console.log(obj2[age])

