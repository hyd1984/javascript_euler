u=require('underscore');
var sum=function(arr) {return u.reduce(arr,function(x,y){return x+y;},0);}
var square=function(x){return x*x;}
console.log(square(sum(u.range(1,101)))-sum(u.map(u.range(1,101),square)));
