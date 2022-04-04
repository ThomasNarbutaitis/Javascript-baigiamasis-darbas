/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const kilosEl = document.getElementById("search");
const divEl = document.getElementById("output");

document.forms[0].addEventListener("submit", (event) => {
  event.preventDefault();
  const kilosValue = kilosEl.value;
  //clear output
  divEl.textContent = "";
  //main function
  validInput(kilosValue);
});

//separate functions for generating outputs=======================================
function outputIntro(kilos) {
  const outputIntroEl = document.createElement("h4");
  outputIntroEl.textContent = `You have entered ${kilos}kg, which will be equal to:`;
  divEl.append(outputIntroEl);
}

function kilosToPounds(kilos) {
  const poundsVal = kilos * 2.2046;
  const pKilosEl = document.createElement("p");
  pKilosEl.textContent = `Pounds(lb): ${poundsVal};`;
  divEl.append(pKilosEl);
}

function kilosToGrams(kilos) {
  const gramsVal = kilos / 0.001;
  const pGramsEl = document.createElement("p");
  pGramsEl.textContent = `Grams(g): ${gramsVal};`;
  divEl.append(pGramsEl);
}

function kilosToOunces(kilos) {
  const ouncesVal = kilos * 35.274;
  const pOuncesEl = document.createElement("p");
  pOuncesEl.textContent = `Ounces(oz): ${ouncesVal};`;
  divEl.append(pOuncesEl);
}

//main function for input validation and all outputs==============================
function validInput(input) {
  if (input.length < 1) {
    divEl.className = "error";
    divEl.textContent = "Please enter the value";
    return divEl;
  }
  if (input != Number(input)) {
    divEl.className = "error";
    divEl.textContent = "Please enter numbers only";
    return divEl;
  } else {
    if ((divEl.className = "error")) {
      divEl.classList.toggle("error");
    }
    outputIntro(input);
    kilosToPounds(input);
    kilosToGrams(input);
    kilosToOunces(input);
  }
}
