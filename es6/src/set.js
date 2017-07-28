/*set 只能放数组*/
let set  = new Set(['aaa','bbb','ccc','aaa']);    //去重
console.log(set);

//增  删  查

set.add('sss');
console.log(set);
set.delete('sss');
console.log(set);
console.log(set.has('aaa'));    //true
console.log(set.has('ggg'));    //false

set.clear();
console.log(set);        //删除所有

/*循环输出 for of    forEach*/
let set1  = new Set(['aaa','bbb','ccc','aaa']);
for(let item of set1){
    console.log(item);
}

set1.forEach((val) => console.log(val));

//size属性
console.log(set1.size);


/*WeakSet  可以放对象*/
let weakObj = new WeakSet();   //不能直接赋值，需要add添加
let obj = {
    a:'yanxiaoguai',
    b:'web'
}
weakObj.add(obj);
console.log(weakObj);