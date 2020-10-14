var dbObj= {}

dbObj.users = [
    {
        name:'Alvin',
        role:'Admin'
    },
    {
        name:'Bhumika',
        role:'Super Admin'
    }
]

dbObj.dbquery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => { return `insert into ${table} name,city Values(${data.name},${data.city})`}
}


//es5
//module.exports = dbObj;

//es6
export default dbObj;