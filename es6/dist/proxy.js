'use strict';

/*proxy 代理  
ES6增强  对象和函数（方法）生命周期  
钩子函数--预处理
*/

var obj = {
    add: function add(val) {
        return val + 100;
    },
    name: 'www.angryyan.com'

    // console.log(obj.add(100));
    // console.log(obj.name);

};var proxy = new Proxy({
    //对象体
    add: function add(val) {
        return val + 1;
    },
    name: 'www.angryyan.com'
}, {
    //预处理机制   get set apply
    get: function get(target, key, property) {
        console.log('come in Get');
        console.log(target);
        console.log(key);
        return target[key];
    },
    set: function set(target, key, value, recieive) {
        console.log('come in Set');
        console.log('setting ' + key + '  = ' + value);
        return target[key] = value; //需要返回
    }
});

console.log(proxy.name); //进入预处理机制之后输出值
proxy.name = 'yanxiaoguai';
console.log(proxy.name);

var target = function target() {
    return '111';
};
var handler = {
    //apply 对方法的预处理
    apply: function apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply.apply(Reflect, arguments);
    }
};
var pro = new Proxy(target, handler);
console.log(pro());
