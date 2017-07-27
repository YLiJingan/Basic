'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var a = 1; //es6声明方式
console.log(a);

/*从数组和对象中提取值，对变量进行赋值，这种称为解构。*/
var b = '111',
    c = '222'; //数组的解构赋值  

console.log(b);
console.log(c);

var _foo$bar = { foo: 'angryyan', bar: '颜小乖' },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar; //对象的解构赋值

console.log(foo + bar);

/**
 * 如果在解构之前就定义了变量，这时候再解构会出现问题。
 * 要解决报错，需要在解构语句的外边加一个圆括号。
 */

var foo1 = void 0;
var _foo = { foo1: 'yanxiaoguai' };
foo1 = _foo.foo1;

console.log(foo1);

var _Hello = "Hello",
    _Hello2 = _slicedToArray(_Hello, 5),
    z = _Hello2[0],
    x = _Hello2[1],
    s = _Hello2[2],
    v = _Hello2[3],
    f = _Hello2[4]; //字符串解构


console.log(z);
console.log(x);
console.log(s);
console.log(v);
console.log(f);
