function randomNumber (number) {
    return Math.floor(Math.random()*number);
}

function randomColor() {
    return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
}

function draw () {
    var pix = document.querySelectorAll('.pixel');

    pix.forEach((pix) => {
        if (isMobile) {
            var drawEvent = "touchmove";
        } else {
            var drawEvent = "mouseenter";
        }

        pix.addEventListener( drawEvent , () => {
            if (pix.style.background === '') {
                pix.style.background = randomColor();
                pix.style.filter = 'brightness(100%)';

            } else {
                let bright = pix.style.filter.match(/[0-9]{2,3}/)[0];
                bright -= 10;
                pix.style.filter = `brightness(${bright}%)`;
            }

        });
    });
}

function resetButton () {
    btn.addEventListener('click', () => {

        document.querySelector('.canvas').remove();
        var canvas = document.createElement('div');
        canvas.classList.add('canvas');
        document.body.appendChild(canvas);

        var newSize = prompt('Please insert canvas size (maximum 100)', 16);
        while (newSize > 100) {
            var newSize = prompt('Please insert canvas size (maximum 100)', 16);
        }


        createCanvas(newSize);
        draw();
    });
}

function createCanvas (pixelN) {
    let canvas = document.querySelector('.canvas');

    for (let i = 0; i < pixelN; i++) {
        for (let i = 0; i < pixelN; i++) {
            var pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.flex = `1 1 ${100 / pixelN}%`;
            
            canvas.appendChild(pixel);

        }
    }
}


let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;


var canvas = document.querySelector('.canvas');    

if (isMobile) {
    canvas.style.height = "390px";
    canvas.style.width = "390px";
} else {
    canvas.style.height = "960px";
    canvas.style.width = "960px";
}


createCanvas(16);

const btn = document.querySelector('button');
resetButton();

draw();
