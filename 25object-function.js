//es5
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = function(){
        return 'Say Hi'
    }
}

var Hindi = new language('Hindi','India')
Hindi
language {name: "Hindi", country: "India", greet: ƒ}

//es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet=()=>{
        return 'Say Hi'
    }
}

var English = new language1('English','UK')