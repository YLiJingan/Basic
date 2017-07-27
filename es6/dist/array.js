'use strict';

/**
 * json数组格式
 */
var json = {
    '0': 'aaa',
    '1': 'bbb',
    '2': 'ccc',
    length: 3
};

var arr = Array.from(json);
console.log(arr);

/*Array.of方法*/
var arr1 = Array.of(3, 4, 5, 6);
console.log(arr1);

/*find实例方法 value index arr*/
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr3.find(function (value, index, arr) {
    return value > 5;
}));

/*fill(text,startindex,endindex)*/
var arr4 = ['yanxiaoguai', '颜小乖', 'angryyan'];
arr4.fill('com', 1, 3);
console.log(arr4);

/*数组循环  for of*/

var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i=0;i<arr5.length;i++){
//     console.log(arr5[i]);
// }
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr5[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        //输出value
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr5.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _item = _step2.value;
        //输出index 下标
        console.log(_item);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr5.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _item2 = _step3.value;
        //输出key:value形式
        console.log(_item2);
    }

    /*手动循环 entries*/
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var list = arr5.entries();
console.log(list.next().value);
