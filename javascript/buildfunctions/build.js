function runningLogger(){
  console.log("I am running!");
}

function multiplyByTen(num){
  new_num = num * 10;
  return new_num;
}
multiplyByTen(5);

function stringReturnOne(){
  return 'This is my first string';
}

function stringReturnTwo(){
  return 'This is my second string';
}

function caller(param){
  if(typeof(param) === "function"){
    param()
  }
}

function myDoubleConsoleLog(x, y){
  if(typeof(x) === "function" && typeof(y) === "function"){
    console.log(x(), y());
  }
}

function caller2(param){
  console.log('starting');
  setTimeout(function(){
    if(typeof(param) === 'function'){
      param();
    }
  }, 2000);
  console.log('ending?');
  return 'interesting'
}

caller2(myDoubleConsoleLog);
