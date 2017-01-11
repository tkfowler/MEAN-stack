function VehicleConstructor(name, wheels, passenger){
  var vehicle = {};
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passenger = passenger;
  vehicle.makeNoise = function(){
    console.log("Vroom, vroom");
  }
  return vehicle
}

var Bike = VehicleConstructor("Harley", 2, 1);
Bike.makeNoise = function(){
  console.log("ring ring!");
}

var Sedan = VehicleConstructor("Civic", 4, 5);
Sedan.makeNoise = function(){
  console.log("Honk Honk!");
}

var Bus = VehicleConstructor("AC Transit", 4, 25);
Bus.pickUp = function(num){
  Bus.passenger += num;
}
