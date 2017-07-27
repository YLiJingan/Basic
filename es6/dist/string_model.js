'use strict';

var yanxiaoguai = '颜小乖'; //字符串拼接
var blog = '    Hello,<b>' + yanxiaoguai + '</b>!   ';
document.write(blog);

var a = 1; //支持运算
var b = 2;
var result = '' + (a + b);
console.log(result);

var str = 'Hello,World!'; //字符串查找
var index = 'o';
console.log(str.indexOf(index)); //输出所在索引
console.log(str.includes(index)); //返回布尔值
console.log(str.startsWith(index));
console.log(str.endsWith(index));
