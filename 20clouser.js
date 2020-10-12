//enclose something 
//local scope
//global scope

/*var a = 10
function add(){
    var b = 20
    return a+b
}
undefined
add()
30
a
10
b */
//Variable that can be access outside the function and inside is global scope
// variable that can be access only inside the function is local scope

/*var a = 10;
function add(){
    var b = 20
    console.log("inside A >>> ",a)
    console.log("inside B >>> ",b)
    return a+b
}

add()
console.log("outside A >>> ",a)
console.log("outside B >>> ",b)
*/

//with var you can access value outside for loop
//with let you can restrict value inside for loop only;
/*
var a = 10
for(i=0;i<4;i++){
    let b = "hi"
    console.log("inside A >>> ",a)
    console.log("inside B >>> ",b)
    console.log(a+i+b)
}
console.log("outside A >>> ",a)
console.log("outside B >>> ",b)*/

/*
function mul(a,b,c){
    return a*b*c
}

///console.log(mul(2)(3)(4)())
console.log(mul(2,3,4))
*/

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

console.log(mul(2)(3)(4))