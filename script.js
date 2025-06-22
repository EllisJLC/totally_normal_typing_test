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
let lineNumber = 0;
const userTypedLine = document.getElementById('textbox');

let y;

function startGame () {

  let interval = Math.round(Math.random()*10000) + 20000;

  y = setInterval(() => {
    quickTime();
    interval = Math.round(Math.random()*10000) + 20000;
  }, interval);

  userTypedLine.focus();
  userTypedLine.value = '';
  document.getElementById('bootin').style.visibility = 'hidden';

  currentLine.innerHTML = lyricsArray[lineNumber]

    userTypedLine.addEventListener("keyup", (event) => {
      const index = Math.floor(Math.random() * 21);
      index.toString();

      if (index >= 20) {
        userTypedLine.value = userTypedLine.value.slice(0, -1)
      }

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

function quickTime() {

  let questAns = randomMath();
  let question = questAns[0];
  let answer = questAns[1];

  let x = setInterval(function() {
    userTypedLine.value = userTypedLine.value.slice(0, -1)
    if (userTypedLine.value == '' && lineNumber > 0) {
      revertLine();
    }
  }, 200)

  Swal.fire({
    title: ''+question,
    input: 'text',
    inputPlaceholder: 'answer here',
    confirmButtonText: 'enter',
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
    inputValidator: (value) => {
      if (!value) {
        return 'Wrong Answer';
      }
    },
    preConfirm: (value) => {

      // Optional: extra validation or async checks
      return new Promise((resolve, reject) => {
        if (value != answer) {
          reject('Wrong Answer');
        } else {
          clearInterval(x); 
          userTypedLine.focus();
          resolve(value);
        }
      }).catch((err) => {
        Swal.showValidationMessage(err);
      });
    }
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('User entered:', result.value);
      //Swal.fire('Done!', `You typed: ${result.value}`, 'success');
    }
  });
}

function deleteCharacters(){
  
}

function randomMath() {
    function rng_x (){ 
        return Math.floor(Math.random() * 4); // 0 to 4
    }

    function rng_a (){ 
        return Math.floor(Math.random() * 9); // 0 to 8
    } 

    function rng_b (){ 
        return Math.floor(Math.random() * 9); // 0 to 8
    } 

    const calc_type = rng_x()+1;

    const a = rng_a();
    const b = rng_b();

    if (calc_type === 1) { // addition
        const ans = a + b;
        return [`What is ${a} plus ${b}?`, ans];
    } else if (calc_type === 2) { // subtraction
        const ans = a - b;
        return [`What is ${a} minus ${b}?`, ans];
    } else if (calc_type === 3) { // multiplication
        const ans = a * b;
        return [`What is ${a} times ${b}?`, ans];
    } else if (calc_type === 4) { // division
        const product = a * b;
        return [`What is ${product} divided by ${b}?`, a]; // ensure b != 0 ideally
    } else {
        console.log(calc_type);
        return [`Invalid type or unused case`, null];
    }
  }