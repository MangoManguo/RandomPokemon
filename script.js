// All Those Pokemon!
let pokemonData;
fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (pokemonData = strData.split(/\r?\n/)));

document.getElementById("btn1").addEventListener("click", randPokemon);
document.getElementById("btn2").addEventListener("click", randTeam);
document.getElementById("input1").addEventListener("change", startLetter);
document.getElementById("input2").addEventListener("change", letterLength);

function randPokemon() {
  let rand = Math.floor(Math.random() * pokemonData.length);
  let pokemon = "";

  for (let i = 0; i < pokemonData[rand].length - 4; i++) {
    pokemon += pokemonData[rand][i];
  }

  document.getElementById(
    "span1"
  ).innerHTML = `<div class="pokeDiv"><img src="images/${pokemonData[rand]}"/><p>${pokemon}</p></div>`;
}

function randTeam() {
  document.getElementById("span2").innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let rand = randomInt(0, pokemonData.length);
    let pokemon = "";

    for (let i = 0; i < pokemonData[rand].length - 4; i++) {
      pokemon += pokemonData[rand][i];
    }

    console.log(pokemonData[rand]);
    console.log(pokemon);

    document.getElementById(
      "span2"
    ).innerHTML += `<div class="pokeDiv"><img src="images/${pokemonData[rand]}" width="55px" style="margin:0px"/><p style="font-size:12px">${pokemon}</p></div>`;
  }
}

function startLetter() {
  document.getElementById("div1").innerHTML = "";
  let letter = document.getElementById("input1").value;
  for (let i = 0; i < pokemonData.length; i++) {
    let pokemon = "";

    for (let n = 0; n < pokemonData[i].length - 4; n++) {
      pokemon += pokemonData[i][n];
    }
    if (pokemonData[i][0] == letter) {
      document.getElementById(
        "div1"
      ).innerHTML += `<div class="pokeDiv"><img src="images/${pokemonData[i]}"/><p>${pokemon}</p></div>`;
    }
  }
}

function letterLength() {
  document.getElementById("div2").innerHTML = "";
  let length = document.getElementById("input2").value;
  console.log(length);
  for (let i = 0; i < pokemonData.length; i++) {
    let pokemon = "";
    for (let n = 0; n < pokemonData[i].length - 4; n++) {
      pokemon += pokemonData[i][n];
    }
    if (pokemon.length == length) {
      document.getElementById(
        "div2"
      ).innerHTML += `<div class="pokeDiv"><img src="images/${pokemonData[i]}"/><p>${pokemon}</p></div>`;
    }
  }
}
