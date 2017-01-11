// function GameConstructor(consumerPrice,dealerCost,name, inStock){
//
//
//   var consumerPrice = consumerPrice;
//   var dealerCost = dealerCost;
//   var ourGame = {};
//
//
//   ourGame._name = name;
//   ourGame.type = 'board game';
//   ourGame.player = [];
//
//
//   ourGame.addPlayer = function(player_name){
//     ourGame.player.push(player_name);
//   }
//   ourGame.showPrivateVariables = function(){
//     console.log(dealerCost);
//     console.log(consumerPrice);
//   }
//
//
//   function myPrivateFunction(){
//     console.log('hello, I am going to create a new object when I am returned!');
//   }
//
//
//   myPrivateFunction();
//   return ourGame;
// }

// function NinjaConstructor(name, age, prevOccupation) {
//   var ninja = {};
//
//   ninja.name = name;
//   ninja.age = age;
//   ninja.prevOccupation = prevOccupation;
//
//   ninja.introduce = function() {
//     console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
//   }
// /*
// return ninja
// */
//   return ninja;
// }
//
// var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
// Andrew.introduce();
//
// var Michael = NinjaConstructor("Michael", 34, "Founder");
// Michael.introduce = function() {
//   console.log("I am the Sensei!")
// }
// Michael.introduce();

// function NinjaConstructor(name, prevOccupation) {
//   this.name = name;
//   this.prevOccupation = prevOccupation;
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//   }
// }
// var dylan = new NinjaConstructor('Dylan', 'Construction Worker');

// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var self = this; // HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log("this is a private method for " + self.name);     // refer to name via self
//     console.log(self);
//   }
//   //PUBLIC
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod();
//     console.log(privateVar);
//   }
// }
// var Speros = new Ninja("Speros", 24, "MBA");
// Speros.introduce();

// var MyObjConstructor = function(name){
//   var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
//   this.name = name; // but you can see the name!
//   this.method = function(){
//     console.log( "I am a method");
//   };
// }
// var obj1 = new MyObjConstructor('object1');
// var obj2 = new MyObjConstructor('object2');
// console.log(obj1);
//
// obj1.newProperty = "newProperty!";
// obj1.__proto__.anotherProperty = "anotherProperty!";
// console.log(obj1.anotherProperty); // anotherProperty!
// console.log(obj1.newProperty); // newProperty!
// // What about obj2?
// console.log(obj2.newProperty); // undefined
// console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!

// function Cat( cat_name ) {
//   var name = cat_name;
//   this.getName = function() {
//     return name;
//   };
// }
// //adding a method to the cat prototype
// Cat.prototype.sayHi = function(){
//   console.log('meow');
// };
// //adding properties to the cat prototype
// Cat.prototype.numLegs = 4;
// var muffin = new Cat('muffin');
// var biscuit = new Cat('biscuit');
// console.log(muffin, biscuit);
// //we access prototype properties the same way as we would access 'own' properties
// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);

//Creating a Node for SLL
var Node = function(val){
  this.val = val;
  this.next = null;
}
Node.prototype.passThis = function(custom_return){
  console.log(this, "this");
  console.log(this.self, "self");
  console.log(custom_return, "My Return");
  return custom_return;
}
//Creating the SLL
var SingleList= function(){
  this.head = null;
}
SingleList.prototype.add = function (val) {
  if (!this.head){
    this.head = new Node(val);
    return this;
  }
  var current = this.head;
  while(current.next){
    current = current.next;
  }
  current.next = new Node(val);
  return this;
};
SingleList.prototype.dequeue = function (callback) {
  var eliminatedNode = this.head;
  this.head = this.head.next;
  eliminatedNode.next = null;
  if (typeof(callback)=='function'){
    callback(eliminatedNode);
  }
  // console.log(this.head);
  return this;
};
//adding nodes to SLL
sList = new SingleList();
sList.add(1).add(2).add(3).add(4).head.next.passThis(sList).dequeue(
  function callback(myNode){
    console.log(myNode.val, "CHAINING INSANITY!");
  })
  .dequeue(
    function anotherCallback(myNode){
      console.log("******************************");
      console.log('Seriously, Stop!', myNode);
    });
