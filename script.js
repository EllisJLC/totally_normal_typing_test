const fs = require('fs');

const lyricsArray = fs.readFileSync('./lyrics.json');
const soundEffects = fs.readdirSync('./sound_effects');

soundEffects.map((file) => {
  const audio = new Audio(`./path/${file}`)
  file = audio;
})

console.log(soundEffects);

const startGame = () => {

}

const quickTime = () => {

}

function deleteCharacters(){
    console.log("fuction called");
    resultObject = document.getElementById('textbox');
    resultObject.value = resultObject.value.slice(0, -1);

}