function add(a,b){     //默认值 b=2
    'use strict'         //可以写在函数体内  es5中是全局的  **和默认值不能同时使用
    if(a == 0){
        throw new Error('A is Error');   //主动报错，类似于vue中v-for必须有:key
    }
    return a+b;
}
console.log(add(1,2));

/*获得参数个数(必须传递的)  有默认值的不算*/
console.log(add.length);


/*箭头函数*/
var add1 = (a,b) => a+b;
console.log(add1(2,3));

/*对象的函数解构 json*/
let json = {
    a:'yanxiaoguai',
    b:'angryyan'
}
function fun({a,b}){     //直接传入对象
    console.log(a,b);
}

fun(json);                

/*数组解构*/
let arr = ['angryyan','yanxiaoguai','com'];
function sum(a,b,c){
    console.log(a,b,c);
}

sum(...arr);

/*in 对象或者数组中是否存在某个值*/

let obj = {
    a:'111',
    b:'222'
}

console.log('a' in obj);  //true
console.log('c' in obj);  //false

let array = [,,,];
console.log(array.length);   //3
console.log(0 in array);     //0的位置为空
console.log(1 in array);      
array.push('111');
console.log(array);
console.log(3 in array);
array.unshift('000');
console.log(array);
console.log(0 in array);

/*遍历数组  forEach  filter  some  map*/
arr.forEach((val,index) => console.log(index,val));

arr.filter(x => console.log(x));

arr.some(x => console.log(x));

console.log(arr.map(x => 'web'));

/*数组转换为字符串   toString   join*/

console.log(arr.toString());     //逗号分隔

console.log(arr.join(' - '));    //自定义分隔符

