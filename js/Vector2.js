class vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(that) {
        return new vector2(this.x + that.x, this.y + that.y);
    }
    sub(that){
        return new vector2(this.x - that.x, this.y - that.y);
    }
    scale(s) {
        return new vector2(this.x * s, this.y * s);
    }
    length(){
        return Math.sqrt(this.x * this.x +this.y +this.y)
    }
    normalize(){
        const n=this.length();
        return new vector2(this.x/n,this.y/n)
    }
}

export default vector2;
