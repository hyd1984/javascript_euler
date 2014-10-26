u=require('underscore');
var arr=u.union(u.range(0,1000,3),u.range(0,1000,5));
console.log(u.reduce(arr,function(x,y){return x+y;},0));
