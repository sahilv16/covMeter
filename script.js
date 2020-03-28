
var countryName = document.getElementById("countryName").value
console.log(countryName);
 
function result(){
    var countryName = document.getElementById("countryName").value

    $.getJSON("https://corona.lmao.ninja/v2/historical/"+countryName, function(data){
    console.log(data);
    
    var country  = data.country;
    var countryN = country.toUpperCase()    
    $('.country').html(countryN)
  
    //cases
    var cases = data.timeline.cases;
    Object.keys(cases);    
    var last = cases[Object.keys(cases)[Object.keys(cases).length - 1]]
    console.log(last);
    $('.cases').html(last)

    var deaths = data.timeline.deaths;
    Object.keys(deaths);    
    var lastd = deaths[Object.keys(deaths)[Object.keys(deaths).length - 1]]
    console.log(lastd);
    
    $('.deaths').html(lastd)
    // var cases = data.timeline.cases.getMonth()

    document.getElementById("countryName").value = ""
})
}

