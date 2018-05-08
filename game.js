var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var fps = parseInt(1000 / 60);
var goLeft = false;
var goRight = false;
var direction = 0;
var lives = 3;
var score = 0;

var myBall = new Ball();
var myPaddle = new Paddle(myBall.size);
var brick = new Array();
var collumns = 6;
var rows = 3;
var bricksAmount = collumns * rows;
for(var row = 1; row <= rows; row++) {
    brick[row] = new Array();
    for(var col = 1; col <= collumns; col++) {
        brick[row][col] = new Brick(col, row);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var row = parseInt(1); row <= rows; row++) {
        for(var col = parseInt(1); col <= collumns; col++) {
            if( brick[row][col].popped == false &&
                myBall.y + myBall.size / 2 >= brick[row][col].y && myBall.y - myBall.size / 2 <= brick[row][col].y + brick[row][col].height &&
                myBall.x + myBall.size / 2 >= brick[row][col].x && myBall.x - myBall.size / 2 <= brick[row][col].x + brick[row][col].width  ){
                myBall.update(brick[row][col]);
                brick[row][col].destroy();
            }
        }
    }
    for(var row = 1; row <= rows; row++) {
        for(var col = 1; col <= collumns; col++) {
            brick[row][col].show();
        }
    }
    myPaddle.update(direction);
    myPaddle.show();
    myBall.update(myPaddle);
    myBall.show();
    drawScore();
    if(myBall.y + myBall.size / 2 >= canvas.height) {
        lives--;
        if(lives == 0) {
            alert("You lost!\nYour score: " + score);
            document.location.reload();
        }
        resetGame();
    }
    if(bricksAmount == 0) {
        alert("You won!\nYour score: " + score);
        document.location.reload();
    }
}

function resetGame() {
    console.log("game resetted");
    myBall = new Ball();
    myPaddle = new Paddle(myBall.size);
}

function drawScore() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.strokeRect(0, 0, canvas.width, 100 - myBall.size / 2);
    ctx.fillStyle = "blue";
    ctx.font = "bold 24px Arial";
    ctx.fillText("Lives: " + lives, 15, 33);
    ctx.fillText("Score: " + score, 15, 66);
    ctx.closePath();
}

document.onkeydown = function(key) {
    if(key.keyCode == 65)
        direction = -1;
    else
        direction = 1;
}

document.onkeyup = function(key) {
    direction = 0;
}

setInterval(draw, fps);
