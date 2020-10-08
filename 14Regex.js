Regexp 
regular expression 

^$

^([a-z])$

var data = "a"
undefined
data.match("^([a-z])$")
(2) ["a", "a", index: 0, input: "a", groups: undefined]
var data = "abc"
undefined
data.match("^([a-z]{3})$")
null

var mypwd = "rthrtjht"
mypwd.match("^([a-z]{8,15})$")

var mypwd = "Agregr44"
mypwd.match("^([a-zA-Z0-9]{8,15})$")


var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")


var phone  = 978979897
undefined
phone.match("^[0-9]{10}$")
VM896:1 Uncaught TypeError: phone.match is not a function


var phone  = 9789798970
undefined
phone.toString().match("^[0-9]{10}$")
["9789798970", index: 0, input: "9789798970", groups: undefined]