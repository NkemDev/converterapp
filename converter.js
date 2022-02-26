let unit = 30;
document.getElementById("unit-value").textContent = unit;
let length2 = document.getElementById("length-measure");
let volume = document.getElementById("volume-measure");
let mass = document.getElementById("mass-measure");
var x , y, a,b,c,d;

function conversion() {
    x = (unit * 3.281).toFixed(3);
    y = (unit / 3.281).toFixed(3);
    a = (unit / 3.785).toFixed(3);
    b = (unit * 3.785).toFixed(3);
    c = (unit * 2.205).toFixed(3);
    d = (unit / 2.205).toFixed(3);
    length2.textContent = unit + "metres" + "= " + x + "feet" + "|" + unit + " feet" + "= " + y + "meters "
    volume.textContent = unit + "Litres" + "= " + a + "gallons" + "|" + unit + " gallons" + "= " + b + "Litres "
    mass.textContent = unit + "Kilos" + "= " + c + "pounds" + "|" + unit + " pounds" + "= " + d + "kilos "
}