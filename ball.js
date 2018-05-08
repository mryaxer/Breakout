class Ball {
    constructor() {
        this.speed = 5;
        this.size = 20;
        this.y = 0.9 * canvas.height - this.size / 2;
        this.x = canvas.width / 2;
        this.dirY = -1;
        this.dirX = 1;
    }

    update(myPaddle) {
        if(this.y - this.size / 2 <= 100 || this.y + this.size / 2 >= canvas.height || this.collide(myPaddle, 1))
            this.dirY *= -1;
        if(this.x - this.size / 2 <= 0 || this.x + this.size / 2 >= canvas.width || this.collide(myPaddle, 0))
            this.dirX *= -1;
        this.y += this.dirY * this.speed;
        this.x += this.dirX * this.speed;
    }

    show() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }

    collide(object, y) {
        if(y == 1) {
            if(this.y + this.size / 2 >= object.y && this.x + this.size / 2 >= object.x && this.x - this.size / 2 <= object.x + object.width)
                this.dirY *= -1;
        } else {
            if(this.y + this.size / 2 >= object.y && this.y - this.size / 2 <= object.y + object.height && ((this.x <= object.x && this.x + this.size / 2 >= object.x) || (this.x >= object.x + object.width && this.x - this.size / 2 <= object.x + object.width)))
                this.dirX *= -1;
        }
    }
}
