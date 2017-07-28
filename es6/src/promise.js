/*promise  解决ES6中的回调地狱的问题*/

let state = 1;
function step1(resolve,reject){
    console.log('开始第一关');
    if(state == 1){
        resolve('第一关--通关成功');
    }else{
        reject('第一关--通关失败');
    }
}
function step2(resolve,reject){
    console.log('开始第二关');
    if(state == 1){
        resolve('第二关--通关成功');
    }else{
        reject('第二关--通关失败');
    }
}
function step3(resolve,reject){
    console.log('开始第三关');
    if(state == 1){
        resolve('第三关--通关成功');
    }else{
        reject('第三关--通关失败');
    }
}

new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);
}).then(function(val){
    console.log(val);
    state = 2;
    return new Promise(step3);
}).then(function(val){
    console.log(val);
    return val;
})