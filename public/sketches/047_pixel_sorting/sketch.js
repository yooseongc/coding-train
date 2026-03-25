
// https://bost.ocks.org/mike/algorithms/
// https://en.wikipedia.org/wiki/Selection_sort
// https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC

/*
    Implement 'Pixel Sorting' using 'selection sort' algorithm.
    Sort the pixels of an image by brightness and hue.

    Selection Sort : 
        Inplace comparison sorting algorithm, has an O(n^2) time complexity,
            which makes it inefficient on large lists, and generally performs
            worse than the similar insertion sort.
        It is noted for its simplicity and has performance advantages over
            more complicated algorithms in certian situations, 
            particularly where auxiliary memory is limited.
        The algorithm divides the input list into two parts:
            a sorted sublist of itmes which is built up 
                from left to right at the front(left) of the list and
                a sublist of the remaining unsorted items that occupy 
                the rest of the list.
        Initially, the sorted sublist is empty and the unsorted sublist is
            the entire input list.
        The algorithm proceeds by finding the smallest (or largest) element 
            in the unsorted sublist, exchanging (swapping) it with the leftmost
            unsorted element (putting it in sorted order), and moving the sublist
            boundaries one element to the right.
        The time efficiency of selection sort is quadratic, so there are a number of 
            sorting techniques with have better time complexity than selection sort.
        One thing which distinguishes selection sort from other sorting algorithms 
            is that it makes the minimum possible number of swaps, n-1 in the worst case.  


        * 제자리 정렬 알고리즘
        * 진행 순서
            1. 주어진 리스트 중에 최소값을 찾는다.
            2. 그 값을 맨 앞에 위치한 값과 교체한다.
            3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.

    HSV (hue saturation brighness(value)) -> 원뿔형 색공간
        - 색상 : 가시광선 스펙트럼을 고리모양으로 배치한 색상환에서 가장 파장이 긴 빨강을 0으로 했을 때
            상대적인 배치 각도 (즉, 0 ~ 360도 범위를 가지며, 360도 == 0도)
        - 채도 : 특정한 색상의 가장 진한 상태를 100%로 하였을 때의 상대적 진한 정도
            0%는 같은 명도의 무채색을 나타냄.
        - 밝기 : 가장 어두운 색을 0 (black), 가장 밝은 색을 1 (white)에 놓았을 때 밝기의 정도로,
            주관적(겉보기) 밝기를 나타냄.
    HSL (hue saturation lightness) -> 원통형 색공간
        - 색상 : 가시광선 스펙트럼을 고리모양으로 배치한 색상환에서 가장 파장이 긴 빨강을 0으로 했을 때
            상대적인 배치 각도 (즉, 0 ~ 360도 범위를 가지며, 360도 == 0도)
        - 채도 : 특정한 색상의 가장 진한 상태를 100%로 하였을 때의 상대적 진한 정도
            0%는 같은 명도의 무채색을 나타냄.
        - 명도 : 밝은 정도를 나타내는 단위로, 가장 밝은 색을 1 위치 (white), 가장 어두운 색인 검정을 
            0 위치 (black)에 놓고, 다른 모든 색의 밝기는 이 사이에 존재함.
*/

/*
    아래 코드는 RGB를 HSL로 변환하는 코드.
    function rgbToHsl(r, g, b) {

        r /= 255, g /= 255, b /= 255;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return [ h, s, l ];
    }
*/


let img;
let sorted;
let index = 0;

let frameP;

function preload() {
    img = loadImage('sunflower.jpg');
}

function setup() {
    createCanvas(400, 200);
    sorted = createImage(img.width, img.height);
    sorted = img.get(); // copy image
    frameP = createP(frameRate());
}

function selectionSort(targetImg) {
    targetImg.loadPixels();
    
    for (let n = 0; n < 10; n++) {
        let record = -1;
        let selectedPixel = index;
        for (let j = index; j < targetImg.pixels.length; j += 4) {
            const pix = color(targetImg.pixels[j], targetImg.pixels[j+1], targetImg.pixels[j+2], targetImg.pixels[j+3])
            const b = hue(pix);
            if (b > record) {
                selectedPixel = j;
                record = b;
            }
        }
        // swap selectedPixel with i
        let temp = [];
        temp[0] = targetImg.pixels[index];
        temp[1] = targetImg.pixels[index+1];
        temp[2] = targetImg.pixels[index+2];
        temp[3] = targetImg.pixels[index+3];

        targetImg.pixels[index] = targetImg.pixels[selectedPixel];
        targetImg.pixels[index+1] = targetImg.pixels[selectedPixel+1];
        targetImg.pixels[index+2] = targetImg.pixels[selectedPixel+2];
        targetImg.pixels[index+3] = targetImg.pixels[selectedPixel+3];
        targetImg.pixels[selectedPixel] = temp[0];
        targetImg.pixels[selectedPixel+1] = temp[1];
        targetImg.pixels[selectedPixel+2] = temp[2];
        targetImg.pixels[selectedPixel+3] = temp[3];

        if (index < targetImg.pixels.length - 1) {
            index += 4;
        }
    }
    targetImg.updatePixels();
}

function draw() {
    frameP.html(`frameRate: ${nf(frameRate(), 2, 2)}`);
    
    selectionSort(sorted);

    background(0);
    image(img, 0, 0);
    image(sorted, 200, 0);
    noStroke();
    fill(255);
}
