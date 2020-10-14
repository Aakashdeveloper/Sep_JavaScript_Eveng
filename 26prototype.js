function human(name){
    this.name = name;
    this.city = "London";
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.color="Red";
}

var john = new human('John')
undefined
john
human {name: "John", city: "London"}

human.prototype = new robot();
var john = new human('John')
john
human {name: "John", city: "London"}
john.legs
2
john.color
"Red"