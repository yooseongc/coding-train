
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring
// https://en.wikipedia.org/wiki/Sprite_(computer_graphics)

/*  
    In computer graphics, a 'sprite' is a two-dimensional bitmap
        that is integrated into a larger scene, most often in a 2D video game.
    The term was first used by Danny Hillis at Texas Instruments in the late 1970s.
    Originally, the term 'sprites' reffered to fixed-sized objects composited together,
        by ahrdware, with a background.
    Use of the term has since become more general.

    Systems with hardware sprites include the TI-99/4A (1979), Atari 8-bit family (1979),
        Commodore 64 (1982), Nintendo Entertainment System (1983), Amiga (1985),
        Sega Genesis (1988), and arcade games of the 1970s and 1980s.
    Hardware varies in the number of sprites supported, how many can be displayed per scan line
        (often a low number), the size and colors of each sprite, and special effects 
        such as scaling or reporting pixel-precise overlap.
    
    Hardware composition of sprites occurs as each scan line is prepared for the video output
        device, such as a CRT, without involvement of the main CPU and without the need for
        a full-screen frame buffer.
    Sprites can be positioned or altered by setting attributes used during the hardware
        composition process.
    
    The CPUs in modern computers, video game consoles, and mobile devices are fast enough
        that bitmaps can be composited without special hardware assistance; 
        alternatively, modern GPUs can perform compositing of vast numbers of scaled, rotated,
        antialiased, and partially translucent images in parallel with the CPU.

*/

let spriteSheet;
let spriteData;

const horses = [];

function preload() {
    spriteData = loadJSON('horse.json');
    spriteSheet = loadImage('horse.png');
}

function setup() {
    createCanvas(640, 144*5);
    const animation = spriteData.frames.map(frame => {
        const { x, y, w, h } = frame.position;
        return spriteSheet.get(x, y, w, h);
    });

    for (let i = 0; i < 5; i++) {
        horses.push(new Sprite(animation, random(0.1, 0.7), 0, 144 * i));
    }

}

function draw() {
    background(51);

    stroke(255);
    strokeWeight(8);
    for (let i = 0; i < 4; i++) {
        line(0, 144 * (i + 1) + 5, width, 144 * (i + 1) + 5);
    }

    horses.forEach(horse => {
        horse.dash();
        horse.show();
        horse.animate();
    });
}
