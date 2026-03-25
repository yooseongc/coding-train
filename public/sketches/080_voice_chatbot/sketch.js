
// https://www.rivescript.com/
// https://github.com/aichaos/rivescript-js

/* 
    Create a chatbot with p5.Speech library for a voice interface.
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

! sub who's = who is

+ *
- try saying knock knock

+ [*] knock knock [*]
- Who's there?

+ *
% who is there
- <star1> who

+ *
% * who
- hahahahahahah


*/

let bot;
let inputSpan;
let outputSpan;

async function loadBot() {
    await bot.loadFile('brainrive.txt');
    bot.sortReplies();
    console.log('Chatbot ready!');
}


function setup() {
    noCanvas();
    
    inputSpan = select('#input');
    outputSpan = select('#output');

    bot = new RiveScript();
    loadBot();

    const speech = new p5.Speech();
    speech.setLang('en-US');
    const speechRec = new p5.SpeechRec('en-US', () => {
        
        if (speechRec.resultValue) {
            const input = speechRec.resultString;
            console.log(input);
            inputSpan.html(input);
            
            bot.reply('local-user', input).then(reply => {
                console.log(reply);
                outputSpan.html(reply);
                speech.speak(reply);
            });
        }

    });
    const continuous = true;
    const interim = false;
    speechRec.start(continuous, interim);

    
    
}

