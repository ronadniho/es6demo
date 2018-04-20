/* fill */
console.log('---------fill替换-----------')
let arr = ['asd','阿三','阿斯顿'];
arr.fill('web',1,3)
console.log(arr)
let arr1 = ['asd','阿三','阿斯顿'];
arr1.fill('web',1,2)
console.log(arr1)

console.log('---------输出值-----------')
let arr3 = [1,23,4,5,64];
for(let item of arr3){
    console.log(item)
}

console.log('---------输出下标-----------')
for(let item of arr3.keys()){
    console.log(item)
}

console.log('---------下标和值一起输出-----------')
for(let item of arr3.entries()){
    console.log(item)
}

console.log('---------下标和值一起输出-----------')
for(let [index,val] of arr3.entries()){
    console.log(index+':'+val)
}

console.log('------------手动循环-----------')
let arr4 = [1123,23,4,5,64];
let list = arr4.entries();
console.log(list)
console.log(list.next().value)/* 输出第一个值 */
console.log('****')
console.log(list.next().value)
console.log('****')
console.log(list.next().value);