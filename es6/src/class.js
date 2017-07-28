/**
 * ES5模拟类   ES6新增class
 */

 class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('yanxiaoguai')+ ':'+'skill--'+val);
    }

    constructor(a,b){      //class参数
        this.a = a;
        this.b = b;
    }

    add(){
        return this.a + this.b;
    }
 }
let yanxiaoguai = new Coder(1,2);
yanxiaoguai.name('颜小乖');
yanxiaoguai.skill('web');
console.log(yanxiaoguai.add());

/**
 * 类的继承
 */

class Htmler extends Coder{

}
let yan = new Htmler;
yan.name('www.angryyan.com');



/**ES5
 * 使用构造函数模拟类,使用new关键字生成实例
 * Object.create();
 * 极简主义法  推荐方法
 */

//使用构造函数模拟类,使用new关键字生成实例
function Cat(){      //类是一个函数
    this.name = '大毛';
}
var cat1 = new Cat();
console.log(cat1.name);

//Object.create();
let Cat2 = {          //类是一个对象
    name:'二毛',
    makeSound:function(){
         console.log('喵喵喵喵');
    }
}
var cat2 = Object.create(Cat2);
console.log(cat2.name);
console.log(cat2.makeSound());

//极简主义法  推荐方法

//用一个对象来模拟类。在这个'类'里面，定义一个构造函数createNew(),用来生成实例
var Cat3 = {
    createNew:function(){
        let cat = {};
        cat.name = '三毛';
        cat.makeSound = function(){
            console.log('喵喵喵喵');
        };
        return cat;
    }
}
//使用的时候，调用createNew()方法，就可以得到实例对象
var cat4 = Cat3.createNew();
cat4.makeSound();



