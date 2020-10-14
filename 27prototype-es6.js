class geo{
    constructor(lat,long){
        this.lat=43.22,
        this.long=70.11
    }
}

class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country = country;
    }

    greet=()=>{
        return 'Say Hi'
    }
}


var French = new language('French','France')
language {lat: 43.22, long: 70.11, name: "French", country: "France", greet: ƒ}