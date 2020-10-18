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
if(stn1 == stn2 || stn1=='G'&& stn2=='R' || stn1=='R' && stn2 =='G' ){
    var lnChange = 'No Line Change / Continual Change only';
    var source = [{"name":"GARP","value":0},{"name":"GPAB","value":1.2},{"name":"GTMT","value":2.5},{"name":"GDUT","value":3.1},{"name":"GYOR","value":3.9},{"name":"GVUR","value":4.5},{"name":"GMAL","value":5.8},{"name":"GKAC","value":6.3},{"name":"GHFA","value":6.8},{"name":"GSYN","value":7.9},{"name":"RHFA","value":6.8},{"name":"RMDF","value":8.1},{"name":"RSTR","value":9.3},{"name":"RRSR","value":9.9},{"name":"RCMN","value":13.1},{"name":"RBRN","value":14.2},{"name":"YBRN","value":14.2},{"name":"YDMD","value":15.8},{"name":"YCHN","value":16.7},{"name":"YTMT","value":17.9},{"name":"YSGO","value":19.8},{"name":"YRPG","value":20.4},{"name":"YSPR","value":22.2},{"name":"YBLR","value":23.1}];
//Find Distance
    let found1 = source.find(e => e.name == from);
    let found2 = source.find(e => e.name == to);
    var dist = Math.abs(found1.value - found2.value).toFixed(1)
//Index of Stations
    var pos1 = source.map(function(e) { return e.name; }).indexOf(from);    
    var pos2 = source.map(function(e) { return e.name; }).indexOf(to);
    var stations = Math.abs(pos1 - pos2);

}
else if(stn1=='G'&& stn2=='R'|| stn1=='R' && stn2 =='G'){
   alert('Green to Red or v/v')
   var lnChange = 'Line Change required';
}
//Yellow Green Line Shift
else if(stn1=='Y' && stn2=='G' || stn1=='G' && stn2 =='Y'){
    var lnChange = 'Line Change required at Tamhat Station.';
    if(stn1=='Y'){
        var from_temp ='GTMT';
        var to_temp = 'YTMT';
    }
    else{
        var from_temp ='YTMT';
        var to_temp = 'GTMT';
    }

    var source =[{"name":"GARP","value":-2.5},{"name":"GPAB","value":-1.3},{"name":"GTMT","value":0},{"name":"GDUT","value":0.6},{"name":"GYOR","value":1.4},{"name":"GVUR","value":2},{"name":"GMAL","value":3.3},{"name":"GKAC","value":3.8},{"name":"GHFA","value":4.3},{"name":"GSYN","value":5.4},{"name":"YBRN","value":-3.7},{"name":"YDMD","value":-2.1},{"name":"YCNM","value":-1.2},{"name":"YTMT","value":0},{"name":"YSGO","value":1.9},{"name":"YRPG","value":2.5},{"name":"YSPR","value":4.3},{"name":"YBLR","value":5.2}]
//Find Distance
    let found1 = source.find(e => e.name == from);
    let found2 = source.find(e => e.name == to);
    let foundt1 = source.find(e => e.name == to_temp);
    let foundt2 = source.find(e => e.name == from_temp);
    var dist = Math.abs(found1.value - foundt1.value) + Math.abs(found2.value - foundt2.value)
    //var dist = Math.abs(found1.value - found2.value).toFixed(1)
//Index of Stations
    var pos1 = source.map(function(e) { return e.name; }).indexOf(from);    
    var pos2 = source.map(function(e) { return e.name; }).indexOf(to);
    var stations = Math.abs(pos1+ pos2-13) ;    
}

else if(stn1=='Y' && stn2=='R' || stn1=='R' && stn2 =='Y'){
    var lnChange = 'Line Change required at Bhraini Station.';
    if(stn1=='Y'){
        var from_temp ='RBRN';
        var to_temp = 'YBRN';
    }
    else{
        var from_temp ='YBRN';
        var to_temp = 'RBRN';
    }

    var source = [{"name":"RHFA","value":7.4},{"name":"RMDF","value":6.1},{"name":"RSTR","value":4.9},{"name":"RRSR","value":4.3},{"name":"RCMN","value":1.1},{"name":"RBRN","value":0},{"name":"YBRN","value":0},{"name":"YDMD","value":1.6},{"name":"YCNM","value":2.5},{"name":"YTMT","value":3.7},{"name":"YSGO","value":5.6},{"name":"YRPG","value":6.2},{"name":"YSPR","value":8},{"name":"YBLR","value":8.9}];
//Find Distance
    let found1 = source.find(e => e.name == from);
    let found2 = source.find(e => e.name == to);
    let foundt1 = source.find(e => e.name == to_temp);
    let foundt2 = source.find(e => e.name == from_temp);
    var dist = Math.abs(found1.value - foundt1.value) + Math.abs(found2.value - foundt2.value)
    //var dist = Math.abs(found1.value - found2.value).toFixed(1)
//Index of Stations
    var pos1 = source.map(function(e) { return e.name; }).indexOf(from);    
    var pos2 = source.map(function(e) { return e.name; }).indexOf(to);
    var stations = Math.abs(pos1 - pos2)-1 ;    
}

else{
    var lnChange = 'Metro Unavailable';
  
}
//CODE= COLOUR-STATION NAME




/*=================    Output decleration   ====================== */
    document.getElementById("x101").innerHTML = from_name + " (" + from +") ";
    document.getElementById("x102").innerHTML = to_name + " (" + to +") ";
    document.getElementById("x201").innerHTML = stations;
    document.getElementById("x202").innerHTML = dist + " km ";
    document.getElementById("x203").innerHTML = (dist/32)*60 + ' minutes';
    document.getElementById("x301").innerHTML = Math.round(18 + dist*7.8);
    document.getElementById("x401").innerHTML = lnChange;
}