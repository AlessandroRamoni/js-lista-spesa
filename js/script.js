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

let i = 0;

while (i < listItems.length) {
  console.log(listItems[i]);
  i++;
}
