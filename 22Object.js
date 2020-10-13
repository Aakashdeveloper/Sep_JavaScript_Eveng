var moviename = "Blood diamond"
var movierating = 4
var movielang = "English"

var moviename1 = "Jab We Met";
var movierating1 = 5
var movielang1 = "Hindi"

//literal object
var movies = {
    name:'Blood diamond',
    rating:4,
    lang:'English'
}
movies
{name: "Blood diamond", rating: 4, lang: "English"}
typeof(movies)
"object"
movies.name
"Blood diamond"
movies.rating
4
movies.lang
"English"
movies['name']
"Blood diamond"
movies['rating']
4

//Add
movies.ind ="Hollywood"
"Hollywood"
movies
{name: "Blood diamond", rating: 4, lang: "English", ind: "Hollywood"}

//update
movies.rating=3.9
3.9
movies
{name: "Blood diamond", rating: 3.9, lang: "English", ind: "Hollywood"}

//Delete
delete movies.lang
true
movies
{name: "Blood diamond", rating: 3.9, ind: "Hollywood"}

//////////
var calc = {
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(2,5)
7
calc.sub(2,5)
-3

var dbquery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => { return `insert into ${table} name,city Values(${data.name},${data.city})`}
}

dbquery.find('Student')
"Select * from Student"
dbquery.insert('student',{name:'John',city:'Delhi'})
"insert into student name,city Values(John,Delhi)"