/**
 * json数组格式
 */
let json = {
    '0': 'aaa',
    '1': 'bbb',
    '2': 'ccc',
    length:3
}

let arr = Array.from(json);
console.log(arr);

/*Array.of方法*/
let arr1 = Array.of(3,4,5,6);
console.log(arr1);


/*find实例方法 value index arr*/
let arr3 = [1,2,3,4,5,6,7,8,9];
console.log(arr3.find(function(value,index,arr){
    return value>5;
}));

/*fill(text,startindex,endindex)*/
let arr4 = ['yanxiaoguai','颜小乖','angryyan'];
arr4.fill('com',1,3);
console.log(arr4);   


/*数组循环  for of*/

let arr5 = [1,2,3,4,5,6,7,8,9];
// for(let i=0;i<arr5.length;i++){
//     console.log(arr5[i]);
// }
for(let item of arr5){              //输出value
    console.log(item);
}

for(let item of arr5.keys()){       //输出index 下标
    console.log(item);
}

for(let item of arr5.entries()){    //输出key:value形式
    console.log(item);
}

/*手动循环 entries*/
let list = arr5.entries();
console.log(list.next().value);
