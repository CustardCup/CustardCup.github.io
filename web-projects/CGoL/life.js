const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const columns = 8**2
const rows = 8**2
const padding = 8
const width = columns + 2*padding
const height = rows + 2*padding

let board = new Array(width);
for (let i=0; i<width; i++) {
    board[i] = new Array(height);
}

for (let i=0; i<width; i++) {
    for (let j=0; j<height; j++) {
        board[i][j] = Math.floor(Math.random()*2);
    }
}

function create2DArray() {
    let arr = new Array(width)
    for (let i=0; i<width; i++) {
        arr[i] = new Array(height);
        for (let j=0; j<height; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

let next = create2DArray();
function updateGrid() {
for (let i=1; i<width-1; i++) {
    for (let j=1; j<height-1; j++) {
        let neighbourSum = 0;
        if (board[i-1][j-1]===1) neighbourSum++
        if (board[i  ][j-1]===1) neighbourSum++
        if (board[i+1][j-1]===1) neighbourSum++

        if (board[i-1][j  ]===1) neighbourSum++
        if (board[i+1][j  ]===1) neighbourSum++

        if (board[i-1][j+1]===1) neighbourSum++
        if (board[i  ][j+1]===1) neighbourSum++
        if (board[i+1][j+1]===1) neighbourSum++

        if (neighbourSum>3) {
            next[i][j] = 0
        } else {
            if (board[i][j]) {
                if (neighbourSum>1) {
                    next[i][j] = 1
                } else {
                    next[i][j] = 0
                }
            } else {
                if (neighbourSum==3) {
                    next[i][j] = 1
                } else {
                    next[i][j] = 0
                }    
            }
         }
    }
}
let temp = board;
board = next;
next = temp;
}

function drawGrid() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
for (let y = padding; y < rows+padding; y++) {
    for (let x = padding; x < columns+padding; x++) {
        if (board[x][y]) {
            ctx.fillRect(
                (x-padding)*10,
                (y-padding)*10,
                10,
                10,
            );
        }
    }
}
}

const fps = 10;
const frameDuration = 1000 / fps;
let lastUpdate = 0;
function animate(timestamp) {
    if (timestamp - lastUpdate >= frameDuration) {
        updateGrid();
        lastUpdate += frameDuration;
    }

    drawGrid();

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
animate(1000);

