function
method
arrow function
IFFI
Generator
///////////////////
var a = 10
var b = 20
a+b
30

////////function//////
function add(a,b){
    return a+b 
}

add(4,5)
9
add(4,50)
54
add('hi','javascript')
"hijavascript"

function isEven(userinput){
    var out;
    if(userinput%2==0){
        out=`Number ${userinput} is even`
    }else{
        out =`Number ${userinput} is odd`
    }
    return out
}

isEven(19)
"Number 19 is odd"
isEven('a')
"Number a is odd"
isEven(9898)
"Number 9898 is even"

function myfunc(a,b){
    return a,b
}
myfunc(3,4)
4
myfunc('a','b')
"b"

function myfunc(a,b){
    var out = [a,b]
    return out
}

////////
method >>>>> when function assign to variable it will become method
/////


var add = function(a,b){
    return a+b 
}

add(1,2)
3
