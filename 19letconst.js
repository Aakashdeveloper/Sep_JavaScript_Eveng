var a = 10

var a; > declaration
a =10  > assignment

> var a = 10
undefined
> a
10
> var a = 20
undefined
> a
20
> a = 30
30
> a
30
> 


> let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 20
20
> b = 21
21


> const c = 10
undefined
> c
10
> c = 11
Uncaught TypeError: Assignment to constant variable.
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared


var > we can redecalre and reassign both 
let > we can not redecalre but can reassign
const > we cannot redecalre nor reassign