for
while
do while
for of
for in
map
filter 

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4


var city = ["Venice", "Paris", "NewYork", "London", "Dubai", "Delhi", "Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(`My City is ${city[i]}`)
}

My City is Venice
My City is Paris
VM67:3 My City is NewYork
VM67:3 My City is London
VM67:3 My City is Dubai
VM67:3 My City is Delhi
VM67:3 My City is Amsterdam


var a = ['a','b','c']
undefined
var b = "hii"
undefined
Array.isArray(a)
true
Array.isArray(b)
false


var city = ["Venice", "Paris",["hi","hello","bie"], "NewYork", "London", "Dubai", "Delhi", "Amsterdam"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

///while////
var i =10;
while(i<5){
    console.log(i)
    i++
}

//do while
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

//////for of////
var city = ["Venice", "Paris", "NewYork", "London", "Dubai", "Delhi", "Amsterdam"]
for(abc of city){
    console.log(abc)
}


var city = ["Venice", "Paris",["hi","hello","bie"], "NewYork", "London", "Dubai", "Delhi", "Amsterdam"]

for(cities of city){
    if(Array.isArray(cities)){
        for(mycity of cities){
            console.log(mycity)
        }
    }else{
        console.log(cities)
    }
}
 