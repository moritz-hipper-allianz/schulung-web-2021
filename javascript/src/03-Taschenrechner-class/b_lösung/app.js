import { Calculator } from "./calculator";

const calculator = new Calculator();

function add() {
  var zahl1 = document.getElementById("zahl1").value;
  var zahl2 = document.getElementById("zahl2").value;

  var result = calculator.add(zahl1, zahl2);
  document.getElementById("result").innerHTML = result;
}

function minus() {
  var zahl1 = document.getElementById("zahl1").value;
  var zahl2 = document.getElementById("zahl2").value;

  var result = calculator.minus(zahl1, zahl2);
  document.getElementById("result").innerHTML = result;
}

// Klick-Listener an den Button hängen
document.getElementById("plusButton").addEventListener("click", add);
document.getElementById("minusButton").addEventListener("click", minus);
