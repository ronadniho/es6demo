console.log('----------map--------------')
let json ={
    name:'js',
    skill:'web'
}
var map = new Map();
console.log('-----------map增删查------------')
console.log('-----------map增------------')
//set
map.set(json,'iam');
console.log(map);
map.set('js',json);
console.log(map)

console.log('-----------map长度size------------')
//size
console.log(map.size)

console.log('-----------map获取------------')
//get
console.log(map.get(json))
console.log(map.get('js'))

console.log('-----------map删------------')
//delete
map.delete(json)
console.log(map)


console.log('-----------map查------------')
//has
console.log(map.has('js'))

console.log('-----------map删全部clear------------')
//clear
map.clear();
console.log(map)

