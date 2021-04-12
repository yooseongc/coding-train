

// firebase tutorial : https://shiffman.net/a2z/firebase/

let database;
let canvas;

let drawing = [];
let currentPath = [];
let isDrawing = false;



function setup() {
    canvas = createCanvas(400, 400);
    canvas.mousePressed(() => {
        isDrawing = true;
        currentPath = [];
        drawing.push(currentPath);
    });
    canvas.mouseReleased(() => {
        isDrawing = false;
    });
    canvas.parent('canvascontainer');
    
    const saveButton = select('#saveButton');
    saveButton.mousePressed(() => {
        const ref = database.ref('drawings');
        ref.push({ name: 'yooseong', drawing: drawing }, (err, status) => {
            console.log(status);
        });
    });
    const clearButton = select('#clearButton');
    clearButton.mousePressed(() => {
        drawing = [];
        currentPath = [];
    });
    
    const firebaseConfig = {
        apiKey: "AIzaSyB1rRqaFlwyzEwliUGA0imhlFuztJaXzQo",
        authDomain: "save-p5-75735.firebaseapp.com",
        databaseURL: "https://save-p5-75735-default-rtdb.firebaseio.com/",
        projectId: "save-p5-75735",
        storageBucket: "save-p5-75735.appspot.com",
        messagingSenderId: "457868091023",
        appId: "1:457868091023:web:8e450eaf48459299375afa"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();

    const params = getURLParams();
    const showDrawing = (key) => {
        const ref = database.ref('drawings/' + key);
        ref.once('value', (data) => {
            drawing = data.val().drawing;
        }, (err) => console.log(err));
    };

    if (params.id) {
        showDrawing(params.id);
    }

    const ref = database.ref('drawings');
    ref.on('value', 
        (data) => {
            // clear the listings.
            const elts = selectAll('.listing');
            elts.forEach(elt => elt.remove());

            // make new listings.
            const drawings = data.val();
            if (!drawings) return;
            for (const key of Object.keys(drawings)) {
                const li = createElement('li', '');
                li.class('listing');
                
                const aHref = createA('#', key);
                aHref.mousePressed(() => showDrawing(aHref.html()));
                aHref.parent(li);

                const perma = createA('?id=' + key, 'permalink');
                perma.parent(li);
                perma.style('padding', '4px');

                li.parent('drawinglist');
            }
        }, 
        (err) => console.log('error on database ref: ', err)
    );
}

function draw() {
    background(0);
    
    if (isDrawing) {
        currentPath.push({ x: mouseX, y: mouseY });
    }
    
    stroke(255);
    strokeWeight(4);
    noFill();
    
    for (const path of drawing) {
        beginShape();
        for (const p of path) {
            vertex(p.x, p.y);
        }
        endShape();
    }
}
