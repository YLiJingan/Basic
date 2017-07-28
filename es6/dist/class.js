'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ES5模拟类   ES6新增class
 */

var Coder = function () {
    _createClass(Coder, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log(this.name('yanxiaoguai') + ':' + 'skill--' + val);
        }
    }]);

    function Coder(a, b) {
        _classCallCheck(this, Coder);

        //class参数
        this.a = a;
        this.b = b;
    }

    _createClass(Coder, [{
        key: 'add',
        value: function add() {
            return this.a + this.b;
        }
    }]);

    return Coder;
}();

var yanxiaoguai = new Coder(1, 2);
yanxiaoguai.name('颜小乖');
yanxiaoguai.skill('web');
console.log(yanxiaoguai.add());

/**
 * 类的继承
 */

var Htmler = function (_Coder) {
    _inherits(Htmler, _Coder);

    function Htmler() {
        _classCallCheck(this, Htmler);

        return _possibleConstructorReturn(this, (Htmler.__proto__ || Object.getPrototypeOf(Htmler)).apply(this, arguments));
    }

    return Htmler;
}(Coder);

var yan = new Htmler();
yan.name('www.angryyan.com');

/**ES5
 * 使用构造函数模拟类,使用new关键字生成实例
 * Object.create();
 * 极简主义法  推荐方法
 */

//使用构造函数模拟类,使用new关键字生成实例
function Cat() {
    //类是一个函数
    this.name = '大毛';
}
var cat1 = new Cat();
console.log(cat1.name);

//Object.create();
var Cat2 = { //类是一个对象
    name: '二毛',
    makeSound: function makeSound() {
        console.log('喵喵喵喵');
    }
};
var cat2 = Object.create(Cat2);
console.log(cat2.name);
console.log(cat2.makeSound());

//极简主义法  推荐方法

//用一个对象来模拟类。在这个类里面，定义一个构造函数createNew(),用来生成实例
var Cat3 = {
    createNew: function createNew() {
        var cat = {};
        cat.name = '三毛';
        cat.makeSound = function () {
            console.log('喵喵喵喵');
        };
        return cat;
    }
    //使用的时候，调用createNew()方法，就可以得到实例对象
};var cat4 = Cat3.createNew();
cat4.makeSound();
