/*symbol*/

let a = new String;
let b = new Number;
let c = new Boolean;
let d = new Array;
let e = new Object;

let f =Symbol('yanxiaoguai');
console.log(typeof(f));
console.log(f);
console.log(f.toString());

//在对象中对key的构建
let g =Symbol();
let obj = {
    [g]:'颜小乖'
}
console.log(obj[g]);

//对对象元素的保护作用

let obj1 = {
    name:'yanxiaoguai',
    skill:'web',
    age:18
}

for(let item in obj1){
    console.log(obj1[item]);
}


let obj2 = {
    name:'yanxiaoguai',
    skill:'web'
}
let age = Symbol();
obj2[age] = 18;
console.log(obj2);

for(let item in obj2){
    console.log(obj2[item]);
}
console.log(obj2[age]);