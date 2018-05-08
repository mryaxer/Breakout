class Paddle {
    constructor(ballSize) {
        this.height = 10;
        this.width = 133;
        this.y = 0.9 * canvas.height + ballSize / 2;
        this.x = canvas.width / 2 - this.width / 2;
        this.speed = 7;
    }

    update(direction) {
        if(direction == 1 && this.x + this.width + this.speed < canvas.width)
            this.x += this.speed;
        else if(direction == -1 && this.x - this.speed > 0)
            this.x -= this.speed;
        else {
            if(direction == 1 && this.x + this.width + this.speed < canvas.width) {
                this.x += this.speed;
                myBall.x += this.speed;
            }
            else if(direction == -1 && this.x - this.speed > 0) {
                this.x -= this.speed;
                myBall.x -= this.speed;
            }
        }
    }

    show() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this. height);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }
}
