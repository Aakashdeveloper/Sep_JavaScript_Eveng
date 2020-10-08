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

var city = ["London", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
undefined
city.splice(3,0,'Inssburg','Hongkong')
[]
city
(9) ["London", "NewYork", "Delhi", "Inssburg", "Hongkong", "Amsterdam", "Paris", "Venice", "Dubai"]
city.splice(5,1)
["Amsterdam"]
city.splice(4,2,'Mumbai')
(2) ["Hongkong", "Paris"]
city
(7) ["London", "NewYork", "Delhi", "Inssburg", "Mumbai", "Venice", "Dubai"]

var a = ['a','b','c']
var b = [1,'rr','hi',2]

var a = ['a','b','c']
var b = [1,'rr','hi',2]
undefined
a+b
"a,b,c1,rr,hi,2"
a.concat(b)
(7) ["a", "b", "c", 1, "rr", "hi", 2]

var url = "https://github.com/Aakashdeveloper/Sep_React_Evng"
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Sep_React_Evng"]
var out = url.split('/')
undefined
out[4]
"Sep_React_Evng"
out[out.length-1]
"Sep_React_Evng"

var data = "I am working on javascript"
undefined
data.split(' ')
(5) ["I", "am", "working", "on", "javascript"]
var sub = "JavaScript"
undefined
sub.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

var colors = ["Red","Yellow",'Green']
var [a,b,c] =colors
a
"Red"
b
"Yellow"
c
"Green"

var myarr = ["Delhi","Mumbai",["Paris","Nice",[1,2,3,['hi',"hello"],6],'Amsterdam'],'London']
undefined
myarr[0]
"Delhi"
myarr[2]
(4) ["Paris", "Nice", Array(5), "Amsterdam"]
myarr[2][1]
         
"Nice"
myarr[2][2]
         
(5) [1, 2, 3, Array(2), 6]
myarr[2][2][0]
         
1
myarr[2][2][3]
         
(2) ["hi", "hello"]
myarr[2][2][3][1]
         
"hello"

myarr[2][3]
"Amsterdam"

var myarr = ["Delhi","Mumbai",["Paris","Nice",[1,2,3,['hi',"hello"],6],'Amsterdam'],'London']
undefined
myarr.flat()
(7) ["Delhi", "Mumbai", "Paris", "Nice", Array(5), "Amsterdam", "London"]
myarr.flat(1)
(7) ["Delhi", "Mumbai", "Paris", "Nice", Array(5), "Amsterdam", "London"]0: "Delhi"1: "Mumbai"2: "Paris"3: "Nice"4: (5) [1, 2, 3, Array(2), 6]5: "Amsterdam"6: "London"length: 7__proto__: Array(0)
myarr.flat(2)
(11) ["Delhi", "Mumbai", "Paris", "Nice", 1, 2, 3, Array(2), 6, "Amsterdam", "London"]
myarr.flat(3)
(12) ["Delhi", "Mumbai", "Paris", "Nice", 1, 2, 3, "hi", "hello", 6, "Amsterdam", "London"]

var city = ["London", "NewYork", "Delhi", "Amsterdam", "Paris", "Venice", "Dubai"]
undefined
city.sort()
(7) ["Amsterdam", "Delhi", "Dubai", "London", "NewYork", "Paris", "Venice"]
city.reverse()
(7) ["Venice", "Paris", "NewYork", "London", "Dubai", "Delhi", "Amsterdam"]