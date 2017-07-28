'use strict';

/*set 只能放数组*/
var set = new Set(['aaa', 'bbb', 'ccc', 'aaa']); //去重
console.log(set);

//增  删  查

set.add('sss');
console.log(set);
set.delete('sss');
console.log(set);
console.log(set.has('aaa')); //true
console.log(set.has('ggg')); //false

set.clear();
console.log(set); //删除所有

/*循环输出 for of    forEach*/
var set1 = new Set(['aaa', 'bbb', 'ccc', 'aaa']);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = set1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

set1.forEach(function (val) {
    return console.log(val);
});

//size属性
console.log(set1.size);

/*WeakSet  可以放对象*/
var weakObj = new WeakSet(); //不能直接赋值，需要add添加
var obj = {
    a: 'yanxiaoguai',
    b: 'web'
};
weakObj.add(obj);
console.log(weakObj);
