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
let progress = -1;
let lineNumber = 0;
const userTypedLine = document.getElementById('textbox');

function startGame () {
  console.log("asdasd")
  document.getElementById('bootin').style.visibility = 'hidden';

  currentLine.innerHTML = lyricsArray[lineNumber]

    userTypedLine.addEventListener("keyup", (event) => {
      const index = Math.floor(Math.random() * 2);
      index.toString();

      const sound = document.getElementById(index);
      sound.play();

      console.log(currentLine.innerHTML)
      console.log(event)

        if (userTypedLine.value == '' && lineNumber > 0 && event.key === "Backspace") {
        if (completedLines.length > 0) {
          revertLine();
        }
        }
          if (currentLine.innerHTML === userTypedLine.value) {
            advanceLine();
        }

    })

}

function advanceLine() {
  lineNumber++;
  currentLine.innerHTML = lyricsArray[lineNumber];
  completedLines.push(userTypedLine.innerHTML);
  userTypedLine.value = '';
}

function revertLine () {
  lineNumber--;
  currentLine.innerHTML = lyricsArray[lineNumber];
  completedLines.slice(0, -1);
  userTypedLine.value = lyricsArray[lineNumber].slice(0, -1);
}

const quickTime = () => {

}

function deleteCharacters(){
    console.log("fuction called");
    resultObject = document.getElementById('textbox');
    resultObject.value = resultObject.value.slice(0, -1);

}