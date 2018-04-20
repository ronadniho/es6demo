console.log('---------对象的函数解构json -------------')
/* 对象的函数解构json */
let json = {
    a: 'jspang',
    b: '技术胖'
}
function fun({ a, b = 'web' }) {
    console.log(a, b)
}
fun(json);

console.log('---------数组解构 -------------')
let arr = ['jspang', '技术胖', '前端教程'];
function fun1(a, b, c) {
    console.log(a, b, c);
}
fun1(...arr)

console.log('---------in的用法 -------------')
let obj ={
    a:'叔',
    b:'ashu'
}
console.log('a' in obj)//in 判断obj有没有a属性的值
console.log('c' in obj)

//判断空位
let arr1 = ['ashu',,,];
console.log(0 in arr1)
console.log(1 in arr1)

console.log('---------数组遍历的几种方法 -------------')
console.log('forEach方法')
// forEach
let arr3=[1,2,3,4,5]
arr3.forEach((val,index)=>{
    console.log(index,val)
})
console.log('filter方法')
//filter
arr3.filter(x=>{
    console.log(x)
})
console.log('some方法')
//some
arr3.some(x=>{
    console.log(x)
})
console.log('map方法有替换功能')
console.log(arr3.map(x=>'web'))