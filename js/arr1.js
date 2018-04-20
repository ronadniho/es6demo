/* json数组格式 */
/* JSON的数组格式就是为了前端快速的把JSON转换成数组的一种格式，我们先来看一下JSON的数组格式怎么写。跟普通的JSON对比是在最后多了一个length属性 */
let json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length: 3
}
console.log('-----------转数组-----')
/* 转数组 */
let arr = Array.from(json);
console.log(arr)

console.log('-----------转数组-----')
let arr1 = Array.of(3, 4, 5, 6)
console.log(arr1)
console.log(Array.of('jspang', '技术胖'))


console.log('-----------老方法eval转数组-----')
let str = '[3,4,5,6]';
let arr2 = eval(str)
console.log(arr2)


console.log('-----------查找元素-----')
/* find()实例方法 */
let arr3 = [1,2,3,4,5,6,7,8,9];
console.log(arr3.find(function(value,index,arr){
    return value>10;/* 没有找到返回undefined */
    return value>5;/* 值大于5返回出来 */
}))
let arr4 = ['asd','阿三','阿斯顿'];
console.log(arr4.find(function(value,index,arr){
    return value=='阿三'
}))