class Brick {
    constructor(row, col) {
        this.x = 80 + (row - 1) * 156;
        this.y = 140 + (col - 1) * 60;
        this.width = 140;
        this.height = 32;
        this.popped = false;
        this.value = 10;
    }

    show() {
        if(this.popped == false) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        }
    }

    destroy() {
        score += this.value;
        this.popped = true;
        bricksAmount--;
    }
}
