// function sum(x, y){
//   var total;
//   for(var i = x; i <= y; i++){
//     total += i;
//   }
//   console.log(total);
// }
//
// function min(arr){
//   var min = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }
//
// function average(arr){
//   var total;
//   for(var i = 0; i < arr.lenght; i++){
//     total += arr[i];
//   }
//   return total/arr.length;
// }

// var sum = function(x, y){
//   var total;
//   for(var i = x; i <= y; i++){
//     total += i;
//   }
//   console.log(total);
// }
//
// var min = function(arr){
//   var min = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }
//
// var average = function(arr){
//   var min = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }

// var object = {
//   sum: function(x, y){
//     var total;
//     for(var i = x; i <= y; i++){
//       total += i;
//     }
//     console.log(total);
//   },
//   min: function(arr){
//   var min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//       if(arr[i] < min){
//         min = arr[i];
//       }
//     }
//     return min;
//   },
//   average: function(arr){
//   var min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//       if(arr[i] < min){
//         min = arr[i];
//       }
//     }
//     return min;
//   }
// }

var person = {};
person = {
  name: 'Tommy',
  distance_traveled: 0,
  say_name: function(){
    alert(person.name);
  },
  say_something: function(string){
    console.log(person.name + " says " + "'" + string + "'");
  },
  walk: function(){
    alert(person.name + ' is walking')
    person.distance_traveled += 3;
  },
  run: function(){
    alert(person.name + ' is running');
    person.distance_traveled += 10;
  },
  crawl: function(){
    alert(person.name + ' is crawling');
    person.distance_traveled += 1;
  }
}
