function cost(){

    /*================= Initialising and reading variables  ====================== */
    var x = document.getElementById("from");
    var from = x.options[x.selectedIndex].value;
    var from_name = x.options[x.selectedIndex].text;
    var y = document.getElementById("to");
    var to = y.options[y.selectedIndex].value;
    var to_name = y.options[y.selectedIndex].text;
    
/*=================    Array Search    ====================== */
var source = [{"name":"GARP","value":0},{"name":"GPAB","value":1.2},{"name":"GDUT","value":3.1},{"name":"GYOR","value":3.9},{"name":"GVUR","value":4.5},{"name":"GMAL","value":5.8},{"name":"GKAC","value":6.3},{"name":"IHFA","value":6.8},{"name":"GSYN","value":7.9}]
let found1 = source.find(e => e.name == from);
let found2 = source.find(e => e.name == to);

var pos1 = source.map(function(e) { return e.name; }).indexOf(from);
var pos2 = source.map(function(e) { return e.name; }).indexOf(to);


var dist = Math.abs(found1.value - found2.value).toFixed(1)
var stations = Math.abs(pos1 - pos2)
console.log(stations)

//Algo: abs of two dist =  distance
/*=================    Output decleration   ====================== */
    document.getElementById("x101").innerHTML = from_name + " (" + from +") ";
    document.getElementById("x102").innerHTML = to_name + " (" + to +") ";
    document.getElementById("x201").innerHTML = stations;
    document.getElementById("x202").innerHTML = dist + " km ";
    document.getElementById("x301").innerHTML = Math.round(18 + dist*7.8);
}