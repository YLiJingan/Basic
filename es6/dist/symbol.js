'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*symbol*/

var a = new String();
var b = new Number();
var c = new Boolean();
var d = new Array();
var e = new Object();

var f = Symbol('yanxiaoguai');
console.log(typeof f === 'undefined' ? 'undefined' : _typeof(f));
console.log(f);
console.log(f.toString());

//在对象中对key的构建
var g = Symbol();
var obj = _defineProperty({}, g, '颜小乖');
console.log(obj[g]);

//对对象元素的保护作用

var obj1 = {
    name: 'yanxiaoguai',
    skill: 'web',
    age: 18
};

for (var item in obj1) {
    console.log(obj1[item]);
}

var obj2 = {
    name: 'yanxiaoguai',
    skill: 'web'
};
var age = Symbol();
obj2[age] = 18;
console.log(obj2);

for (var _item in obj2) {
    console.log(obj2[_item]);
}
console.log(obj2[age]);
