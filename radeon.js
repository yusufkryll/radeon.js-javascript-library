var Rdf = function() {
this.in = function(x) {
return document.getElementById(x).innerHTML;
}
this.value = function(x) {
return document.getElementById(x).value;
}
this.void = function(x) {
return document.getElementById(x);
}
this.STR = function(x) {
return JSON.stringify(document.getElementById(x));
}
this.blend = function(x) {
var y = 0;
for(i in x){
y+=x[i];
}
return y/x["length"];
}
this.remove = function(x) {
return document.getElementById(x).remove();
}
this.deleteByName = function(x,y) {
y.splice( y.indexOf(x), 1 );
};
this.del = function(x,y) {
y.splice( x, 1 );
};
this.hide = function(x) {
return document.getElementById(x).style.display = 'none';
}
this.show = function(x) {
return document.getElementById(x).style.display = 'block';
}
this.blendcolors = function(color1, color2, percentage){
    // check input
    color1 = color1 || '#000000';
    color2 = color2 || '#ffffff';
    percentage = percentage || 0.5;

    // 1: validate input, make sure we have provided a valid hex
    if (color1.length != 4 && color1.length != 7)
        throw new error('colors must be provided as hexes');

    if (color2.length != 4 && color2.length != 7)
        throw new error('colors must be provided as hexes');

    if (percentage > 1 || percentage < 0)
        throw new error('percentage must be between 0 and 1');
    if (color1.length == 4)
        color1 = color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3];
    else
        color1 = color1.substring(1);
    if (color2.length == 4)
        color2 = color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3];
    else
        color2 = color2.substring(1);
    //valid
    color1 = [parseInt(color1[0] + color1[1], 16), parseInt(color1[2] + color1[3], 16), parseInt(color1[4] + color1[5], 16)];
    color2 = [parseInt(color2[0] + color2[1], 16), parseInt(color2[2] + color2[3], 16), parseInt(color2[4] + color2[5], 16)];
    //hex
    var color3 = [
        (1 - percentage) * color1[0] + percentage * color2[0],
        (1 - percentage) * color1[1] + percentage * color2[1],
        (1 - percentage) * color1[2] + percentage * color2[2]
    ];

    //blended
    color3 = '#' + int_to_hex(color3[0]) + int_to_hex(color3[1]) + int_to_hex(color3[2]);
    return color3;
}
this.splitwith = function(x,y) {
  n = [];
  var z = "";
  x = x.split("");
  for(c in x){
    for(o in y){
      if(x[c]==y[o]){
        if(z!=""){
          n.push(z);
        }
        n.push(x[c]);
        x[c]="";
        z = "";
      }
    }
      z+=x[c];
  }
  if(z!=""){
    n.push(z);
  }
  return n;
}
this.onclick = function(x,y) {
document.getElementById(x).onclick = y;
}
this.any = function(x,y,z) {
for(i in x){
for (c in y) {
if(y[c]==x[i]){
z(i,c);
}
}
}

}
this.until = function(a,x,y,z) {
  for(i in a){
    if(a[i]!=x){
      y(i);
    }else{
      z(i);
    }
  }
}
this.among = function (a,x,y,z) {
var _in = false;
var ltng = "";
var end = false;
for(i in a){
  if(a[i]==x && _in==false){
    _in=true;
  }else if(_in==true){
    if(a[i]==y){
      _in=false;
      end = true;
      z(a[i],ltng,end);
      ltng="";
    }else{
      ltng+=a[i];
      z(a[i],ltng,end);
    }
  }
}
}
this.equalsone = function (x,y,z) {
for(i in y){
if(x==y[i]){
z(i,y[i]);
}
}
}
this.dictif = function(x,y) {
for (c in y) {
if(x==c){
return y[c];
}
}
return "";
}
}
function int_to_hex(num){
    var hex = Math.round(num).toString(16);
    if (hex.length == 1)
        hex = '0' + hex;
    return hex;
}
// Ex. var $ = new Rdf; $.in("id");
var R = new Rdf();
