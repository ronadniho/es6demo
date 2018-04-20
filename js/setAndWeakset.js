console.log('----------Set只能放数组--------------')
let setArr = new Set([
    'jsp',
    'web',
    'js',
    'js'
]);//Set重复的值，读不出来
console.log(setArr)
console.log(setArr.size)

setArr.add('前端职场')//Set用add添加值不能用push
console.log(setArr)

console.log('----------has--------------')
console.log(setArr.has('js'))//判断有没有
console.log(setArr.has('jasd'))

console.log('----------clear--------------')
setArr.delete('js');
console.log(setArr)
setArr.clear();//全部清除
console.log(setArr)



console.log('----------WeakSet可以放对象--------------')
let weakObj = new WeakSet();
let obj = {a:'js',b:'jsp'};
let obj1 = obj;
weakObj.add(obj);
weakObj.add(obj1);
console.log(weakObj)













