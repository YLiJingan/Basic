function foo(...arg){           //扩展运算符
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}

foo(1,2,3);

// let arr1 = ['www','angry','yan'];
// let arr2 = arr1;
// console.log(arr2);
// arr2.push('com');
// console.log(arr1);

let arr1 = ['www','angry','yan'];
let arr2 = [...arr1];
console.log(arr2);
arr2.push('com');
console.log(arr2);
console.log(arr1);

/*reset运算符*/

function bar(first,...arg){
    console.log(arg.length);
    // for(let i=0;i<arg.length;i++){
    //     console.log(arg[i]);
    // }
    for(let i of arg){
        console.log(i);
    }
}

bar(1,2,3,4);