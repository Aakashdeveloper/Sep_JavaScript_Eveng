var car = {
    details:function(){
        return this.brand+ this.model
    }
}

var mycar={
    brand:'BMW',
    model:'x6'
}

car.details.call(mycar)
"BMWx6"

car.details.apply(mycar)
"BMWx6"

///////////
var car = {
    details:function(color,year){
        return this.brand + this.model+ color + year
    }
}

var mycar={
    brand:'BMW',
    model:'x6'
}
///to pass parameter as object+non-array
car.details.call(mycar,'red','2019')
"BMWx6red2019"

///to pass parameter as object+array
car.details.apply(mycar,['red','2019'])
"BMWx6red2019"