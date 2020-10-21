var url = "https://api.exchangeratesapi.io/latest?base="
//es5
/*function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        final = data.rates;
        final = (final[out]*Number(amount))
        var result = `Converted Value of ${amount} ${base} is ${final} ${out}`
        document.getElementById('output').innerText=result
    })
}*/

//es6
async function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    let response = await fetch(`${url}${base}`,{method:'GET'});
    let data = await response.json()
    final = data.rates;
    final = (final[out]*Number(amount))
    let result = `Converted Value of ${amount} ${base} is ${final} ${out}`
    document.getElementById('output').innerText=result
}