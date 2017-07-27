let yanxiaoguai = '颜小乖';                //字符串拼接
let blog = `    Hello,<b>${yanxiaoguai}</b>!   `;
document.write(blog);

let a=1;                     //支持运算
let b=2;
let result = `${a+b}`;
console.log(result);

let str = 'Hello,World!';             //字符串查找
let index = 'o';
console.log(str.indexOf(index));       //输出所在索引
console.log(str.includes(index));      //返回布尔值
console.log(str.startsWith(index));
console.log(str.endsWith(index));

