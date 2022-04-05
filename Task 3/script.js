/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const endpoint = "https://api.github.com/users1";
const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");
const messageEl = document.getElementById("message");

btnEl.addEventListener("click", getUsers);

//functions==============================================

//main function
async function getUsers() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    changeMessage(response);
    generateCards(data);
  } catch (error) {
    console.log(error);
  }
}

//hides message or shows error if fails to fetch
function changeMessage(resp) {
  if (resp.ok) {
    messageEl.className = "hide";
  } else {
    messageEl.textContent = "Unexpected error. Please try again later...";
  }
}

//single card generation
function createSingleCard(name, pic) {
  const cardEl = document.createElement("figure");
  cardEl.className = "fig";
  cardEl.innerHTML = `<img src="${pic}" alt="user image" />
  <figcaption>username: ${name}</figcaption>`;
  outputEl.append(cardEl);
}

//generates all cards
function generateCards(array) {
  array.map((obj) => createSingleCard(obj.login, obj.avatar_url));
}
