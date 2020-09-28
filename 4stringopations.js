
var city = "AmsteRDam"

city.toUpperCase()
"AMSTERDAM"
city.toLowerCase()
"amsterdam"

var city = "lOndON";
"London"

var city = "London"
undefined
city[0]
"L"
city[1]
"o"
city.length
6
city[5]
"n"

var name = "  Aakash   "
undefined
name.length
11
name.trim()
"Aakash"
var output = name.trim()
undefined
output
"Aakash"


var name = "  Aakash . "
undefined
name.trim()
"Aakash ."


var a = "John"
var b = "john"
a==b
false
var c ="Johm"
a==c
false
var c ="John"
a==c
true
a.toLowerCase() == b.toLowerCase()
true


var a = "John"
undefined
a.charAt(0)
"J"
a.charAt(1)
"o"
a.charAt(0).toLowerCase()
"j"

var color = "orange";
color.slice(1)

var color = "orange";
color.slice(1)
"range"
color.slice(2)
"ange"
color.slice(3)
"nge"
color.slice(2,5)
"ang"
color.slice(3,10)
"nge"


var city = "lOndON";
undefined
city.charAt(0)
"l"
city.charAt(0).toUpperCase()
"L"
city.slice(1)
"OndON"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
"London"

var a = " I am learning Javascript"
undefined
a.replace('Javascript','JS')
" I am learning JS"
var a = "John Snow"
undefined
a.replace(' ','-')
"John-Snow"
var a = "Javascript I am learning Javascript"
undefined
a.replace('Javascript','JS')
"JS I am learning Javascript"
a.replace(/Javascript/g,'JS')
"JS I am learning JS"

var name = "  Aakash . "
undefined
name.replace(/ /g,'')
"Aakash."

var a = 89789789
undefined
a.toString()
"89789789"
var a = "101"
undefined
Number(a)
101