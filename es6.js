/* let arr1 = [1,2,3]
let arr2 = [...arr1];
arr2.push(4)
console.log(arr1)
console.log(arr2) */

function jspang(first,last,...arg){
    console.log(first)
    console.log(last)
    console.log(arg)
}
jspang(0,1,2,3,4,5,6,7)