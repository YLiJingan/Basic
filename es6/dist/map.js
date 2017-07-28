'use strict';

var json = {
    name: 'yanxiaoguai',
    skill: 'web'
};
console.log(json, name); //需要遍历所有的，灵活性不好

/*key => value  key,value均可以为任意值,非常灵活*/
var map = new Map();
map.set(json, 'com');
console.log(map);
map.set('yanxiaoguai', json);
console.log(map);

//增set 删delete 查get
console.log(map.get('yanxiaoguai'));
console.log(map.get(json));
