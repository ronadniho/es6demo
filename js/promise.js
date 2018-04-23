console.log('-------------promise 1.洗菜做饭。 2.坐下来吃饭。3.收拾桌子洗碗。-------------')
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
let state=1;
 
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}
 
 
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}
 
 
function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
}
new Promise(step1)
    .then(
        function (val) {
            console.log(val)
            return new Promise(step2);
        })
    .then(
        function (val) {
            console.log(val)
            return new Promise(step3);
        })
    .then(
        function (val) {
            console.log(val)
        });