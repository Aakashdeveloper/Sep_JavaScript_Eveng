if(condition){
    //do something
}else{
    //do something
}

var a = 899878
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 899878 is even

var name = "Bhumika"
if(name=="John"){
    console.log("You are admin")   
}else if(name=="Bhumika"){
    console.log("You are Super Admin")
}else if(name=="Aakash"){
    console.log("You are user")
}else{
    console.log("I dont know you")
}
You are Super Admin


var role = "Admin"
var name = "Keev"
if(role=="Admin"){
    if(name=="John"){
        console.log("You are System admin");
    }else if(name=="Aakash"){
        console.log("You are Aplication Admin");
    }else{
        console.log("You are Admin");
    }
}else if(role=="User"){
    if(name=="John"){
        console.log("You are System user");
    }else if(name=="Aakash"){
        console.log("You are Super user");
    }else{
        console.log("You are user");
    }
}else{
    console.log("I dont know you")
}

var a = 1
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}
"hi"

var a = 0
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}
Bie

var a = 1
if(true){
    console.log("Hi")
}else{
    console.log("Bie")
}

truthy => any number except 0 (+number, -ve number), true, string
falsy => 0 ,false, null, undefined

/////
ternary operator (single line if else condition)
//////
var a =10
a>10? "Hii":"Bie"
"Bie"
var a =10
a==10? "Hii":"Bie"
"Hii"

var a =10
a==10? a+1:a-1
11
var a =9
a==10? a+1:a-1
8


var a = 2000

if(a%5==0){
    console.log(`${a} is a leep year`)
}else{
    console.log(`${a} is a not leep year`)
}