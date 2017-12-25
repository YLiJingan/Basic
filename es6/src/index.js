{
    let a=1;                       //es6声明方式
    var b=2;
}
//console.log(a);                  //Uncaught ReferenceError: a is not defined
console.log(b); 

function aa(){
    console.log('I am outside');
}

(function(){
    var aa = undefined;
    if(false){
        function aa(){
            console.log('I am inside');
        }
    }
})();

aa();
// {
//     let t =f();
//     t = t* t + 1;
// }                       //块级作用域将多个操作封装在一起，没有返回值。

/*从数组和对象中提取值，对变量进行赋值，这种称为解构。*/
let [B,c] = ['111','222'];        //数组的解构赋值  
console.log(B);
console.log(c);
/*本质上，这种写法是‘模式匹配‘，只要等号两边的模式相同，左边的变量会被赋予对应的值。*/
/*不完全解构*/
console.log('不完全解构:');
let [X,Y] = [1,2,3];
console.log(X);
console.log(Y);


let{foo,bar} = {foo:'angryyan',bar:'颜小乖'};   //对象的解构赋值，foo是匹配的模式，baz才是变量，真正被赋值是变量baz，而不是模式foo
console.log(foo+bar);

/**
 * 如果在解构之前就定义了变量，这时候再解构会出现问题。
 * 要解决报错，需要在解构语句的外边加一个圆括号。
 */

 let foo1;
 ({foo1} = {foo1:'yanxiaoguai'});
 console.log(foo1);


const [z,x,s,v,f] = "Hello";        //字符串解构
console.log(z);
console.log(x);
console.log(s);
console.log(v);
console.log(f);

//用途    
let xx = 1;
let yy = 2;
[xx,yy] = [yy,xx];
console.log([xx,yy]);