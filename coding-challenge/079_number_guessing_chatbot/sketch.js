
// https://www.rivescript.com/
// https://github.com/aichaos/rivescript-js

/* 
    Create a chatbot that plays a number guessing game.
    Use RiveScript with p5.js

    RiveScript is a simple scripting language for chatbots with a friendly, easy to learn syntax.
    It's a plain text, line-based scripting language with goals of being simple to learn,
      quick to type, and easy to read and maintain.


    * Examples 

    + hello bot
    - Hello, human!  

    + my name is *
    - <set name=<formal>>I will remember to call you <get name>.

    + (what is|do you know) my name
    * <get name> != undefined => Yes, your name is <get name>!
    - I don't know your name.
*/

/*

// Chatbot's brain
! version = 2.0

// ! var num = 37555

+ set #
- <set num=<star>>

+ #
* <star> > <get num> => pick a lower number
* <star> < <get num> => pick a higher number
* <star> == <get num> => you got it!

+ *                                           <- put anything,
- Guess a number between 1 and 10                then response this.


*/

let bot;
let textInput;
let textOutput;

async function loadBot() {
    await bot.loadFile('brainrive.txt');
    bot.sortReplies();
    const num = floor(random(10)) + 1;   // 1 ~ 10
    await bot.reply('local-user', 'set ' + num);
}

async function chat() {
    const txt = textInput.value();
    const reply = await bot.reply('local-user', txt);
    textOutput.html(reply);
}

function setup() {
    noCanvas();
    bot = new RiveScript();
    const button = select('#submit');
    textInput = select('#user_input');
    textOutput = select('#output');
    button.mousePressed(chat);

    loadBot();
    
}

