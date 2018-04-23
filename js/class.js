console.log('------------class-------------')
class Coder {
    name(val) {
        console.log(val)
        return val;
    }
    skill(val) {
        console.log(this.name('php') + ":" + val)
    }


    constructor(a, b) {//类的参数
        this.a = a;
        this.b = b;

    }
    add(){
        return this.a+this.b;
    }
}
let jspang = new Coder;
// jspang.name('web')
jspang.skill('web')

console.log('------------class的传参-------------')
let jspang2 = new Coder(1,2);
console.log(jspang2.add())

console.log('------------class的继承-------------')
class Htmler extends Coder{
}
let pang = new Htmler;
pang.name('jspang')