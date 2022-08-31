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
lista.style.color = "green";
const addButton = document.getElementById("add");

////////////////AGGIUNGERE UN ELEMENTO (BUTTON)
const pulsante = document.createElement("button");
pulsante.append("Aggiungi");
addButton.append(pulsante);
pulsante.classList.add("backred", "center");

/////////////////CICLO WHILE
let i = 0;

while (i < listItems.length) {
  // console.log(listItems[i]);
  // elenco.innerHTML += `<li class="list-group-item">${listItems[i]}</li>`;

  if (i % 2 === 0) {
    elenco.innerHTML += `<li class="list-group-item backgreen">${listItems[i]}</li>`;
  } else {
    elenco.innerHTML += `<li class="list-group-item backred">${listItems[i]}</li>`;
  }

  i++; //condizione di uscita
}

let e = 0;
const moreItems = ["quaderni", "matite", "paperelle", "post-it"];
// articolo = moreItems[e];
pulsante.addEventListener("click", function () {
  if (e < moreItems.length) {
    if (i % 2 === 0) {
      elenco.innerHTML += `<li class="list-group-item backgreen">${moreItems[e]}</li>`;
    } else {
      elenco.innerHTML += `<li class="list-group-item backred">${moreItems[e]}</li>`;
    }
    // elenco.innerHTML += `<li class="list-group-item backgreen">${moreItems[e]}</li>`;
    e++;
  }

  // console.log(articolo);
});

// elenco.innerHTML += `<li class="list-group-item">${moreItems[e]}</li>`;
