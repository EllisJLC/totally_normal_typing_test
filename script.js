const lyricsArray = fetch('./lyrics.json');
const soundEffects = fetch('./sound_effects');
const completedLines = [];

console.log(lyricsArray);

soundEffects.map((file) => {
  const audio = document.createElement('audio');
  audio.src = `./sound_effects/${file}`;
  audio.autoplay = false;
  audio.controls = false;
  audio.loop = false;
  document.body.appendChild(audio)
})

function startGame () {
  const lineNumber = 0;

  currentLine = document.createElement('h3');
  userTypedLine = document.createElement('h3');

  currentLine.value = lyricsArray[lineNumber]

  userTypedLine.addEventListener("change", (event) => {
    userTypedLine = event.value;
    control = currentLine.splice(0, event.value.length-1);

    if (event.value === '' && lineNumber > 0) {
      if (completedLines.length > 0) {
        event.value = completedLines[-1];
        completedLines.slice(-1);
        lineNumber--;
        currentLine.value = lyricsArray[lineNumber];
      }
    }

    if (control != event.value) {
      userTypedLine.style.color = 'ff0000';
    } else {
      userTypedLine.style.color = '000000';

        if (control === currentLine === event.value) {
          lineNumber++;
          currentLine.value = lyricsArray[lineNumber];
          completedLines.push(event.value);
          event.value = '';
      }

    }

  })
}

const quickTime = () => {

}

const deleteCharacters = () => {

}

startButton = document.getElementById("start_button").addEventListener("click", () => {console.log('test')});
console.log(startButton);