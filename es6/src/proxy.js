/*proxy 代理  
ES6增强  对象和函数（方法）生命周期  
钩子函数--预处理
*/

let obj = {
    add:function(val){
        return val +100;
    },
    name:'www.angryyan.com'
}

// console.log(obj.add(100));
// console.log(obj.name);

let proxy = new Proxy({
    //对象体
    add:function(val){
        return val+1;
    },
    name:'www.angryyan.com'
},{
    //预处理机制   get set apply
    get:function(target,key,property){
        console.log('come in Get'); 
        console.log(target);
        console.log(key);
        return target[key];
    },
    set:function(target,key,value,recieive){
        console.log('come in Set');
        console.log(`setting ${key}  = ${value}`);
        return target[key] = value;       //需要返回
    }
});

console.log(proxy.name);   //进入预处理机制之后输出值
proxy.name = 'yanxiaoguai';
console.log(proxy.name);

let target = function(){
    return '111';
}
let handler = {
    //apply 对方法的预处理
    apply(target,ctx,args){
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}
let pro = new Proxy(target,handler);
console.log(pro());