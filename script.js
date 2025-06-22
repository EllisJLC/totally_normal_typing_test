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


const currentLine = document.getElementById('lyrics');
  
const userTypedLine = document.getElementById('textbox');

function startGame () {
  console.log("asdasd")
    
  const lineNumber = 0;

  document.getElementById('bootin').style.visibility = 'hidden';

  currentLine.innerHTML = lyricsArray[lineNumber]

    userTypedLine.addEventListener("keydown", (event) => {
      const sound = document.getElementById('1');
      sound.play();
      control = currentLine.innerHTML.splice(0, userTypedLine.innerHTML .length-1);
      console.log(control);

        // if (event.value === '' && lineNumber > 0) {
        // if (completedLines.length > 0) {
        //     event.value = completedLine
        //     completedLines.slice(-1);
        //     lineNumber--;
        //     currentLine.value = lyricsArray[lineNumber];
        // }
        // }

        // if (control != event.value) {
        // userTypedLine.style.color = 'ff0000';
        // } else {
        // userTypedLine.style.color = '000000';

        //     if (control === currentLine === event.value) {
        //     lineNumber++;
        //     currentLine.value = lyricsArray[lineNumber];
        //     completedLines.push(event.value);
        //     event.value = '';
        // }

        // }

    })

}

function advanceLine() {
  lineNumber++;
  currentLine.innerHTML = lyricsArray[lineNumber];
  completedLines.push(userTypedLine.innerHTML);
  userTypedLine.innerHTML = '';
}

function revertLine () {
  lineNumber--;
  currentLine.innerHTML = lyricsArray[lineNumber];
  completedLines.slice(0, -1);
  userTypedLine.innerHTML = completedLines[-1];
}

const quickTime = () => {

}

function deleteCharacters(){
    console.log("fuction called");
    resultObject = document.getElementById('textbox');
    resultObject.value = resultObject.value.slice(0, -1);

}