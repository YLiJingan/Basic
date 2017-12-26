/**
 * json数组格式
 */
import 'babel-ployfill';

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

/*map 输出个数与输入个数一样*/
// let result = arr5.map(function(itm){
//     return item*2;
// })
/*使用箭头函数*/
let result = arr5.map(item=>item*2)
console.log(result);

/*reduce 输出一个结果*/
let result2 = arr5.reduce(function(tmp,item,index){
    if(index!= this.length-1){
        return temp +item;
    }else{
        return (temp+item)/this.length;
    }
})
console.log(result2);


/*filter 筛选*/
// let result3 = arr5.filter(item=>{  //输出能被3整除的数
//     if(item%3 == 0){
//         return true;
//     }else{
//         return false;
//     }
// })

let result3 = arr5.filter(item=>item%3 == 0);    //箭头函数简写
consoel.log(result3);


/*forEach*/
arr5.forEach((item,index)=>{
    console.log(index+':'+item);
})