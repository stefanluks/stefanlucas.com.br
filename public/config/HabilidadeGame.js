export default class HabilidadeGame{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    getCanvas(){
        return this.canvas;
    }

    start(){
        let ctx = this.ctx;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}