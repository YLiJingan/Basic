/**
 * JSON对象
 */

 let json = {a:12,b:5};
 console.log(JSON.stringify(json));  //json转字符串

 let str = '{"a":12,"b":5,"c":8}';
 console.log(JSON.parse(str));     //字符串转json

 let a=12;
 let b=5;

 let json1 = {a:a,b,b};
 console.log(json1);
 let json2 = {a,b};      //key和value一样，只写一个也行
 console.log(json2);

 let json3 = {
     a:12,
    //  show:function(){
    //      alert(this.a);
    //  }
    show(){                    /* 冒号 function省略*/
        alert(this.a);
    }
 }