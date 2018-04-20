let a=11/4;
console.log('-----------判断是否是数字-------------')
/* Number.isFinite()判断是否是数字 */
console.log(Number.isFinite(a));
console.log(Number.isFinite('jspang'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));
console.log(Number.isFinite(null));

console.log('-----------判断是否是非数值-------------')
/* NaN */
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(123))

console.log('-----------判断是否是整数-------------')
/* Number.isInteger */
let b=9123;
console.log(Number.isInteger(b))
console.log(Number.isInteger(123.1))

console.log('-----------判断是否是小数-------------')
console.log(!Number.isInteger(b))
console.log(!Number.isInteger(123.1))

console.log('-----------2的53次方-------------')
let c = Math.pow(2,53);
console.log(c)

console.log('-----------最大安全整数-------------')
console.log(Number.MAX_SAFE_INTEGER)
console.log('-----------最小安全整数-------------')
console.log(Number.MIN_SAFE_INTEGER)


console.log('-----------是否是安全整数-------------')
console.log(Number.isSafeInteger(c))
c = Math.pow(2,53)-1;
console.log(Number.isSafeInteger(c))
