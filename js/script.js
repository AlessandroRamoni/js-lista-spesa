console.log("Martedì");

const listItems = [
  "yogurt",
  "pane",
  "sale",
  "marmellata",
  "farina",
  "affettati",
  "lievito",
  "mozzarelle",
  "burro",
  "acqua",
  "olive",
  "aceto",
  "olio",
  "broccoli",
  "bagnoschiuma",
  "birre",
];
/*
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i]);
}
*/

const elenco = document.querySelector(".list-group");
const lista = document.getElementById("lista");

const addButton = document.getElementById("add");
const pulsante = document.createElement("button");
pulsante.append("Aggiungi");
addButton.append(pulsante);

lista.style.color = "green";

let i = 0;

while (i < listItems.length) {
  // console.log(listItems[i]);
  // elenco.innerHTML += `<li class="list-group-item">${listItems[i]}</li>`;

  if (i % 2 === 0) {
    elenco.innerHTML += `<li class="list-group-item backgreen">${listItems[i]}</li>`;
  } else {
    elenco.innerHTML += `<li class="list-group-item backred">${listItems[i]}</li>`;
  }

  i++;
}
