const fs = require('fs');

const lyricsArray = fs.readFileSync('./lyrics.json');
const soundEffects = fs.readdirSync('./sound_effects');

soundEffects.map((file) => {
  const audio = new Audio(`./path/${file}`)
  file = audio;
})

console.log(soundEffects);

const startGame = () => {
  const lineNumber = 0;
  currentLine = document.getElementById("lyrics");
  userTypedLine = document.getElementById("input");

  currentLine.value = lyricsArray[lineNumber]

  userTypedLine.addEventListener("change", (event) => {
    userTypedLine = event.value;
  })
}

const quickTime = () => {

}

const deleteCharacters = () => {

}

document.getElementById("start_button").addEventListener("click", startGame);