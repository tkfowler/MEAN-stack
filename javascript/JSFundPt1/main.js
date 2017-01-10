var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for(var i = 0; i < x.length; i++){
  console.log(x[i]);
};
x.push(100);
x.push(['hello', 'world', 'JavaScript is Fun']);
console.log(x);
var sum = 0;
for(var i = 1; i <= 500; i++){
  sum += i;
};
console.log(sum);
arr = [1, 5, 90, 25, -3, 0];
for(var j = 1; j < arr.length; j++){
  var min = arr[0];
  if(arr[j] < min){
    min = arr[j];
  }
}
console.log(min);
var sum1 = 0
for(var k = 0; k < arr.length; k++){
  sum1 += arr[k];
  var avg = sum1/arr.length;
}
console.log(avg);
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(var x in new_ninja){
  console.log(x, ':', new_ninja[x])
}
