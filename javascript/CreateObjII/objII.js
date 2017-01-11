function VehicleConstructor(name, wheels, passenger, speed){
  //private
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += self.speed;
  }
  //public
  this.name = name;
  this.wheels = wheels;
  this.passenger = passenger;
  this.speed = speed;
  this.makeNoise = function(){
    console.log("Vroom, vroom");
  }
  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkMiles = function(){
    console.log(distance_travelled);
  }
}

var Bike = new VehicleConstructor("Harley", 2, 1, 10);
Bike.makeNoise = function(){
  console.log("ring ring!");
}

var Sedan = new VehicleConstructor("Civic", 4, 5, 60);
Sedan.makeNoise = function(){
  console.log("Honk Honk!");
}

var Bus = new VehicleConstructor("AC Transit", 4, 25, 35);
Bus.pickUp = function(num){
  Bus.passenger += num;
}

Bus.move()
