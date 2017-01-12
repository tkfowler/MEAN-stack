var _ = {
   map: function(arr, callback) {
     for(var i = 0; i < arr.length; i++){
       arr[i] = callback(arr[i]);
     }
     return arr;
   },
   reduce: function(arr, callback, memo = arr[0]) {
     var sum = 0;
     for(var i = 0; i < arr.length; i++){
       sum += callback(memo, arr[i]);
     }
     return sum;
   },
   find: function(arr, callback) {
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i])){
         return arr[i]
       }
     }
   },
   filter: function(arr, callback) {
     var new_arr = [];
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i])){
         new_arr.push(arr[i]);
       }
     }
     return new_arr;
   },
   reject: function(arr, callback) {
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i])){
         arr.splice(i, 1);
       }
     }
     return arr;
   }
 }
// you just created a library with 5 methods!
// var z = _.map([1, 2, 3], function(num){ return num * 3; });
// console.log(z);
// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// console.log(sum);
// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(even)
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens)
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
