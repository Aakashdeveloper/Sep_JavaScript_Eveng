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