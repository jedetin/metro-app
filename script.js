function cost(){

    /*================= Initialising and reading variables  ====================== */
    var x = document.getElementById("from");
    var from = x.options[x.selectedIndex].value;
    var from_name = x.options[x.selectedIndex].text;
    var y = document.getElementById("to");
    var to = y.options[y.selectedIndex].value;
    var to_name = y.options[y.selectedIndex].text;
    
    //var lnChange = 'You have to change the Line'
/*=================    Array Search    ====================== */
var stn1 = from.slice(0,1);
var stn2 = to.slice(0,1);
if(stn1 == stn2 || stn1 == 'I' || stn2 == 'I'){
    var lnChange = 'No Line Change';
}
else{
   var lnChange = 'Line Change required';
}

var source = [{"name":"GARP","value":0},{"name":"GPAB","value":1.2},{"name":"GDUT","value":3.1},{"name":"GYOR","value":3.9},{"name":"GVUR","value":4.5},{"name":"GMAL","value":5.8},{"name":"GKAC","value":6.3},{"name":"IHFA","value":6.8},{"name":"GSYN","value":7.9},{"name":"RMDF","value":8.1},{"name":"RSTR","value":9.3},{"name":"RRSR","value":9.9},{"name":"RCMN","value":13.1},{"name":"RBRN","value":14.2}];
let found1 = source.find(e => e.name == from);
let found2 = source.find(e => e.name == to);

//Index for number of station
var pos1 = source.map(function(e) { return e.name; }).indexOf(from);
var pos2 = source.map(function(e) { return e.name; }).indexOf(to);
var stations = Math.abs(pos1 - pos2)

//absolute distance rounded
var dist = Math.abs(found1.value - found2.value).toFixed(1)



/*=================    Output decleration   ====================== */
    document.getElementById("x101").innerHTML = from_name + " (" + from +") ";
    document.getElementById("x102").innerHTML = to_name + " (" + to +") ";
    document.getElementById("x201").innerHTML = stations;
    document.getElementById("x202").innerHTML = dist + " km ";
    document.getElementById("x301").innerHTML = Math.round(18 + dist*7.8);
    document.getElementById("x401").innerHTML = lnChange;
}