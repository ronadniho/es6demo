/* console.log('-------------主动抛出异常-------------')
function add(a,b=1){
    if(a==0){
        throw new Error('a is Error')
    }
    return a+b;
}
console.log(add(0)) */


console.log('-------------es6严谨模式可以放在局部-------------')
function asd(a, b) {
    'use strict';
    return a + b;
}
console.log(asd(1, 3))
console.log('-------------es6获取参数的length-------------')
console.log(asd.length)


console.log('-------------箭头函数,箭头函数不能new-------------')
var as = (a, b = 1) => a + b;/* 一句话自动会添加return，不用加{} */
console.log(as(1))
var ab = (a, b = 1) => {
    console.log('ooooooooooo')
    return a + b
}/* 多句话必须加{} */
console.log(ab(2))