function randomNumber (number) {
    return Math.floor(Math.random()*number);
}

function randomColor() {
    return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
}

function draw () {
    var pix = document.querySelectorAll('.pixel');

    pix.forEach((pix) => {
        pix.addEventListener('mouseenter', () => {
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


var canvas = document.querySelector('.canvas');    

createCanvas(16);

const btn = document.querySelector('button');
resetButton();

draw();
