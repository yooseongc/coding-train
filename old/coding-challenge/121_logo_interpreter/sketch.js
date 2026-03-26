
// https://en.wikipedia.org/wiki/Logo_(programming_language)
// http://cs.brown.edu/courses/bridge/1997/Resources/LogoTutorial.html

let editor;
let turtle;

function setup() {
    const canvas = createCanvas(500, 500);
    select('#canvasDiv').child(canvas);
    const presetSelect = select('#preset');
    presetSelect.changed(() => {
        editor.value(presetSelect.value());
        goTurtle();
    });

    angleMode(DEGREES);
    background(51);

    turtle = new Turtle(0, 0, 0);
    editor = select('#code');
    editor.input(goTurtle);
    goTurtle();
}

function execute(commands) {
    for (const command of commands) {
        const { name, arg } = command;
        if (name === 'repeat') {
            for (let i = 0; i < arg; i++) {
                execute(command.commands);
            }
        } else {
            commandLookUp[name](arg);
        }
    }
}

function goTurtle() {
    push();
    turtle.reset();
    const code = editor.value();
    const parser = new Parser(code);
    const commands = parser.parse();
    console.log(commands);
    execute(commands);
    const d = dist(0, 0, turtle.x, turtle.y);
    console.log(d);
    scale(1/d);
    pop();
}
