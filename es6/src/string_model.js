//字符串扩展

let yanxiaoguai = '颜小乖';                //字符串拼接
let blog = `    Hello,<b>${yanxiaoguai}</b>!   `;
document.write(blog);
//普通字符串
console.log(`In IS '\n' is a line-feed.`);
//多行字符串
console.log(`In JS this is 
not legal`);
//字符串中嵌入变量  
let name = 'Yan',time = 'today';
console.log(`Hello,${name},how are you ${time}`);

let a=1;                     //支持运算
let b=2;
let result = `${a+b}`;
console.log(result);
let obj = {x:1,y:2};
console.log(`${obj.x + obj.y}`);

let str = 'Hello,World!';             //字符串查找
let index = 'o';
console.log(str.indexOf(index));       //输出所在索引
console.log(str.includes(index));      //返回布尔值
console.log(str.startsWith(index));
console.log(str.endsWith(index));

let s = 'Hello,ES6';
console.log(s.includes('6'));
console.log(s.startsWith('H'));
console.log(s.endsWith('6'));

let text = String.fromCodePoint(0x20BB7);
for(let i=0;i<text.length;i++){
    console.log(text[i]);
}

console.log('X'.repeat(5));   //重复字符串X次

console.log('X'.padStart(5,'ab')); //在头部补全
console.log('X'.padEnd(5,'ab'));    //在尾部补全
//原字符串的长度大于或者等于指定的最小字符串长度，则返回原字符串
console.log('XXXX'.padEnd(2,'xx'));  
console.log('XXX'.padStart(3,'xx'));
//如果省略第二个参数，默认使用空格补全长度  
console.log('X'.padStart(4));
console.log('X'.padStart(5));


