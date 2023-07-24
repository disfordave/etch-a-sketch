let canvasSize = 500;

let horizontalLength = 50;

let selectedColor = "black";

const value = document.querySelector("#size-value");
const input = document.querySelector("#canvas-size-range");

const color = document.querySelector("#color-select");

let eraserMode = false;

let vw  = document.documentElement.clientWidth;



function checkWindowSize() {
    vw = document.documentElement.clientWidth;
    if (vw <= 300) {
        canvasSize = 200;
        
    } else if (vw <= 370) {
        canvasSize = 250;
        
    } else if (vw <= 480) {
        canvasSize = 300;
        
    } else if (vw <= 640) {
        canvasSize = 400;
        
    } else {
        canvasSize = 500;
        
    }
    adjustCanvasSize();
    adjustSquaresSize();
}

function addSquare(many) {
    for(var i=0; i < many; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${canvasSize/horizontalLength}px`;
        square.style.height = `${canvasSize/horizontalLength}px`;
        square.setAttribute("onmousedown", "squareClick(this)");
        document.getElementById("canvas-area").appendChild(square);
        
        
    }
}

function clearSquares() {
    document.getElementById("canvas-area").innerHTML = "";
}

addSquare(horizontalLength*horizontalLength);
adjustCanvasSize();

function adjustCanvasSize() {
    document.getElementById("canvas-area").style.maxWidth = `${canvasSize}px`
    document.getElementById("canvas-area").style.maxHeight = `${canvasSize}px`
}

function adjustSquaresSize() {
    let squares = document.getElementsByClassName('square');
    for(let square of squares) {
        square.style.width = `${canvasSize/horizontalLength}px`;
        square.style.height = `${canvasSize/horizontalLength}px`;
    }
}

value.textContent = `${input.value} x ${input.value}`;
input.addEventListener("input", (event) => {
  value.textContent = `${event.target.value} x ${event.target.value}`;
  horizontalLength = event.target.value;
});

function selectSize() {
    clearSquares();
    addSquare(horizontalLength*horizontalLength);
}


color.addEventListener("input", (event) => {
  selectedColor = event.target.value;
});


// var divItems = document.getElementsByClassName("radiodiv");

function squareClick(item) {
    // this.clear();
    // item.style.backgroundColor = selectedColor;
    if (!eraserMode) {
        item.style.backgroundColor = selectedColor;
    } else {
        item.style.backgroundColor = "#ffffff";
    } 
}

// function clear() {
//     for(var i=0; i < divItems.length; i++) {
//         var item = divItems[i];
//         item.style.backgroundColor = 'white';
//     }
// }

function eraser() {
    eraserMode = !eraserMode;
    if (eraserMode) {
        document.getElementById("eraser-button").style.backgroundColor = "coral";
    } else {
        document.getElementById("eraser-button").style.backgroundColor = "white";
    }
}

function clearAll() {
    // clearSquares();
    // addSquare(horizontalLength*horizontalLength);

    let squares = document.getElementsByClassName('square');
    for(let square of squares) {
        square.style.backgroundColor = "#ffffff";
        square.style.backgroundColor = "#ffffff";
    }
}

window.addEventListener('resize', checkWindowSize);

// Check window size initially when the script loads
checkWindowSize();

// var square = document.createElement('div');
// square.className = 'square';
// let location = document.getElementById("canvas-area");
// location.appendChild(square);