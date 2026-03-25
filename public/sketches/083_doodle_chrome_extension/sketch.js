console.log('sketch blah');

// using instance mode!
const s = (sketch) => {
    sketch.setup = function() {
        document.body.style['userSelect'] = 'none'; // 텍스트 선택 방지
        let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        c.position(0, 0);
        // pointer-events 는 HTML 요소들의 마우스/터치 이벤트들
        // (CSS hover/active, JS click/tap, 커서 드래그등)
        // 의 응답을 조정할 수 있는 속성
        c.style('pointer-events', 'none'); // hover, active, 클릭, 커서 등 비활성화
        sketch.clear(); // make canvas transparent
    };
    
    sketch.draw = function() {
        sketch.stroke(0);
        sketch.strokeWeight(4);
        if (sketch.mouseIsPressed) {
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    };
};

const myp5 = new p5(s);