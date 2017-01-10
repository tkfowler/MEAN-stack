function VehicleConstructor(name, wheels, passenger, speed){
  var vin = createVin();
  this.name = name;
  this.wheels = wheels;
  this.passenger = passenger;
  this.speed = speed;
  this.distance_travelled = 0;
  this.showVin = function(){
    return vin;
  }

  function createVin(){
    var str = "";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for(var i = 0; i < 17; i++){
      str += charset.charAt(Math.floor(Math.random()* charset.length))
    }
    return str
  }
}
  VehicleConstructor.prototype.makeNoise = function(){
    console.log("Vroom, vroom");
    return this;
  }
  VehicleConstructor.prototype.updateDistanceTravelled = function(){
    this.distance_travelled += this.speed;
    return this;
  }
  VehicleConstructor.prototype.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
  }
  VehicleConstructor.prototype.checkMiles = function(){
    console.log(this.distance_travelled);
    return this;
  }

var Bike = new VehicleConstructor("Harley", 2, 1, 10);
Bike.makeNoise = function(){
  console.log("ring ring!");
  return this;
}

var Sedan = new VehicleConstructor("Civic", 4, 5, 60);
Sedan.makeNoise = function(){
  console.log("Honk Honk!");
  return this;
}

var Bus = new VehicleConstructor("AC Transit", 4, 25, 35);
Bus.pickUp = function(num){
  Bus.passenger += num;
  return this;
}
console.log(Bus.showVin())
console.log(Bus)
