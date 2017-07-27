'use strict';

function foo() {
    //扩展运算符
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
    console.log(arguments.length <= 3 ? undefined : arguments[3]);
}

foo(1, 2, 3);

// let arr1 = ['www','angry','yan'];
// let arr2 = arr1;
// console.log(arr2);
// arr2.push('com');
// console.log(arr1);

var arr1 = ['www', 'angry', 'yan'];
var arr2 = [].concat(arr1);
console.log(arr2);
arr2.push('com');
console.log(arr2);
console.log(arr1);

/*reset运算符*/

function bar(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    console.log(arg.length);
    // for(let i=0;i<arg.length;i++){
    //     console.log(arg[i]);
    // }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            console.log(i);
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
}

bar(1, 2, 3, 4);
