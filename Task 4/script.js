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

window.addEventListener("load", () => {
  getCars();
});

async function getCars() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log("data ===", data);
    genAllCars(data);
  } catch (error) {
    console.log(error);
  }
}

function genOneCard(brand, models) {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardTitle = document.createElement("h2");
  const cardText = document.createElement("p");
  cardTitle.textContent = `${brand}`;
  cardText.textContent = `${models}`;
  cardEl.append(cardTitle, cardText);
  outputEl.append(cardEl);
}

function genAllCars(ObjAarray) {
  return ObjAarray.forEach((obj) => {
    genOneCard(obj.brand, obj.models);
  });
}
