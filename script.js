
function calculateAverage() {
  var numberInput = document.getElementById("numberInput").value;
  var numbersArray = numberInput.split(",").map(Number);
 
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
 
  var average = sum / numbersArray.length;
 
  document.getElementById("result").innerHTML = "Průměr čísel v poli je: " + average;
}

function findMinMax() {
  var numberInput = document.getElementById("numberInput").value;
  var numbersArray = numberInput.split(",").map(Number);
 
  var min = Math.min.apply(null, numbersArray);
  var max = Math.max.apply(null, numbersArray);
 
  document.getElementById("result").innerHTML = "Nejmenší číslo v poli je: " + min + "<br> Nejvyšší číslo v poli je: " + max;
}

function convertToUpperCase() {
  var textInput = document.getElementById("textInput").value;
  var upperCaseText = textInput.toUpperCase();
  document.getElementById("result").innerHTML = "Text s velkými písmeny: " + upperCaseText;
}
 
function convertToLowerCase() {
  var textInput = document.getElementById("textInput").value;
  var lowerCaseText = textInput.toLowerCase();
  document.getElementById("result").innerHTML = "Text s malými písmeny: " + lowerCaseText;
}

function combineArrays() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
 
  var array1 = input1.split(",");
  var array2 = input2.split(",");
 
  var combinedArray = array1.concat(array2);
 
  document.getElementById("result").innerHTML = "Spojené pole: " + combinedArray;
}

function displayAnimalCount() {
  var animals = {
    "mercedes": 5,
    "audi": 3,
    "bmw": 7,
    "porsche": 10
   
  };
 
  var result = "Seznam zvířat a jejich počet:<br>";
 
  for (var animal in animals) {
    result += animal + ": " + animals[animal] + "<br>";
  }
 
  document.getElementById("result").innerHTML = result;
}

function checkElement() {
  var elementToCheck = document.getElementById("elementInput").value;
 
 
  var set = new Set();
  set.add("prvek1");
  set.add("prvek2");
  set.add("prvek3");
 
 
  if (set.has(elementToCheck)) {
    document.getElementById("result").innerHTML = "Prvek " + elementToCheck + " existuje v množině.";
  } else {
    document.getElementById("result").innerHTML = "Prvek " + elementToCheck + " neexistuje v množině.";
  }
}
