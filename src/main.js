google.load('maps','2',{callback:simple});var map;
 function simple(){
    var map = new GMap2(document.getElementById("show-map"));
    map.setCenter(new GLatLng(19.421523, -99.163199),4);
};