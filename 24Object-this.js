var firstname = "Michal";
var lastName = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastName:'Lisa',
    greet:function(){
        return `Say hi to ${firstname} ${lastName}`
    }
}

sayHi.greet()
"Say hi to Michal Peter"


var firstname = "Michal";
var lastName = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastName:'Lisa',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastName}`
    }
}
sayHi.greet()
"Say hi to Zoe Lisa"

////
constructor
/////
var bob = new Object();
bob.age = 10;
bob.city = "NewYork"
bob.setAge = function(newAge){
    this.age = newAge
}

bob
{age: 10, city: "NewYork", setAge: ƒ}
bob.setAge(20)
undefined
bob
{age: 20, city: "NewYork", setAge: ƒ}


var tony = new Object();
tony.age = 34;
tony.city = "Delhi"
tony.setAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10;
bob.city = "NewYork"
bob.setAge = function(newAge){
    this.age = newAge
}

var createAge = function(newAge){
    this.age = newAge
}

var tony = new Object();
tony.age = 34;
tony.city = "Delhi"
tony.setAge = createAge;

var bob = new Object();
bob.age = 10;
bob.city = "NewYork"
bob.setAge = createAge;