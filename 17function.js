/*function greet(){
    return "Hii To All"
}
console.log(greet())*/
//IFFI//

(function(){
    console.log("Hii To All")
}())

////Generator function
function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}

looping(5)
0
1
2
3
4

/////////

function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}


var data = looping(4)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: undefined, done: true}