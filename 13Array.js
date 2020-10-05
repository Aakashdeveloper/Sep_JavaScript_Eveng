Array is a collection of homegeniouos as well as hetrogenuios datatype
var a = [1,3,5,7,8]
var b = ['a','hii','rh','5465']
var c = [true,false,false,false,true]
var d = [1,2,4,true,true,"rty",456,false,"f","fh"]

var city = ["London","NewYork","Delhi","Amsterdam","Paris"]
undefined
typeof(city)
"object"
city.lenght
undefined
city.length
5
city[0]
"London"
city[4]
"Paris"
city[city.length-1]
"Paris"
typeof(city[0])
"string"

var city = ["London","NewYork","Delhi","Amsterdam","Paris"]
undefined
city.push("Venice")
6
city
(6) ["London", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice"]
city.push("Dubai")
7
city
(7) ["London", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]

var city = ["London", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
undefined
city.pop()
"Dubai"
city.pop()
"Venice"
city
(5) ["London", "NewYork", "Delhi", "Amsterdam", "Paris"]
city.pop(2)
"Paris"


var city = ["London", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
undefined
city.shift()
"London"
city.unshift('Nice')
7
city
(7) ["Nice", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
city.unshift('')
8
city
(8) ["", "Nice", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]

Push > add the value in the end always
unshift> add the value in the begning always
Pop> Remove the value form the end
shift > remove for the beginning always



var city = ["London", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
undefined
city.slice(1)
(6) ["NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
city
(7) ["London", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
city.slice(2)
(5) ["Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
city.slice(3)
(4) ["Amsterdam", "Paris", "Venice", "Dubai"]
city.slice(2,6)
(4) ["Delhi", "Amsterdam", "Paris", "Venice"]
city.slice(1,4)
(3) ["NewYork", "Delhi", "Amsterdam"]

slice 
splice 
