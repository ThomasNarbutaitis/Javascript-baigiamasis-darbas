/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const endpoint = "cars.json";
const outputEl = document.getElementById("output");

window.addEventListener("load", getCars);

//main function
async function getCars() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    genAllCars(data);
  } catch (error) {
    console.log(error);
  }
}

//generates one card
function genOneCard(brand, models) {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardTitle = document.createElement("h2");
  const cardText = document.createElement("p");
  cardTitle.textContent = `${brand}`;
  cardText.textContent = `${models.join(", ")}`;
  cardEl.append(cardTitle, cardText);
  outputEl.append(cardEl);
}

//generates all cards
function genAllCars(ObjAarray) {
  return ObjAarray.forEach((obj) => {
    genOneCard(obj.brand, obj.models);
  });
}
