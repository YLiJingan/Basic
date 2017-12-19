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

{
    let t =f();
    t = t* t + 1;
}                       //块级作用域将多个操作封装在一起，没有返回值。

let x = do {
    let t = f();
    t* t + 1;
};

/*从数组和对象中提取值，对变量进行赋值，这种称为解构。*/
// let [b,c] = ['111','222'];        //数组的解构赋值  
// console.log(b);
// console.log(c);

let{foo,bar} = {foo:'angryyan',bar:'颜小乖'};   //对象的解构赋值
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