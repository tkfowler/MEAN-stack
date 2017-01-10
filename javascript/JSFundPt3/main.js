function personConstructor(name){
  var person = {
    name: name,
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
  return person;
}

function ninjaConstructor(name, cohort){
  var belt_color = ['yellow','red', 'black'];
  var ninja = {
    name: name,
    cohort: cohort,
    belt_level: 0,
    levelUp: function(){
      if(ninja.belt_level < 2){
        ninja.belt_level += 1;
        ninja.belt = belt_color[ninja.belt_level];
      }
      return ninja;
    }
  }
  ninja.belt = belt_color[ninja.belt_level];
  return ninja;
}
console.log(ninjaConstructor('tommy', 'october' ))
