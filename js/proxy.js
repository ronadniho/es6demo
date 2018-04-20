console.log('---------proxy代理-------------');


let pro = new Proxy(
    {
        add: function (val) {
            return val + 10;
        },
        name: 'I am Jspang',
    },
    {
        //get set apply
        get: function (target, key, property) {
            //预处理机制
            console.log('come in Get')

            console.log('---------target-------------');
            console.log(target)
            console.log('---------key-------------');
            console.log(key)
            console.log('---------target[key]-------------');
            return target[key];
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}=${value}`);
            return target[key] = value;
        }
    }
)

console.log('---------get-------------');
console.log(pro.name)

console.log('---------set-------------');
pro.name = '加速';
console.log(pro.name)

console.log('---------apply-------------');
let tar = function () {
    return 'i am web'
}
let handler = {
    apply(target, ctx, args) {
        console.log('do apply')
        return Reflect.apply(...arguments);
    }
}
let pro2 = new Proxy(
    tar,
    handler
)

console.log(pro2())



















