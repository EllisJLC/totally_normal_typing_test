const lyricsArray = [
  "We're no strangers to love",
  "You know the rules and so do I",
  "A full commitment's what I'm thinking of",
  "You wouldn't get this from any other guy",
  "I just wanna tell you how I'm feeling",
  "Gotta make you understand",
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "We've known each other for so long",
  "Your heart's been aching, but you're too shy to say it",
  "Inside, we both know what's been going on",
  "We know the game, and we're gonna play it",
  "And if you ask me how I'm feeling",
  "Don't tell me you're too blind to see",
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "We've known each other for so long",
  "Your heart's been aching, but you're too shy to say it",
  "Inside, we both know what's been going on",
  "We know the game, and we're gonna play it",
  "I just wanna tell you how I'm feeling",
  "Gotta make you understand",
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you"
]
const completedLines = [];

function startGame () {
  const lineNumber = 0;

  document.getElementById('bootin').style.visibility = 'hidden';

  currentLine = document.getElementById('lyrics');
  
  userTypedLine = document.getElementById('textbox');

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
