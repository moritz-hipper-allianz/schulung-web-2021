// Zahl einlesen ausgelagert und hier zentrales parsen des Strings
function readNumber(id) {
  return parseFloat(document.getElementById(id).value);
}

function add() {
  var zahl1 = readNumber("zahl1");
  var zahl2 = readNumber("zahl2");

  var result = zahl1 + zahl2;
  document.getElementById("result").innerHTML = result;
}

function minus() {
  var zahl1 = readNumber("zahl1");
  var zahl2 = readNumber("zahl2");

  var result = zahl1 - zahl2;
  document.getElementById("result").innerHTML = result;
}

// Klick-Listener an den Button hängen
document.getElementById("plusButton").addEventListener("click", add);
document.getElementById("minusButton").addEventListener("click", minus);
