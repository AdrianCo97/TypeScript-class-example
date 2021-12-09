class Point {
    constructor(private x?: number, private y?: number) {
    }
    
    draw() {
        console.log('X:' + this.x + ', Y: ' + this.y)
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(value: number){
        if(value < 0){
            throw new Error('Value cannot be less than 0.');
        }
        this.x = value;
    }

    setY(value: number){
        if(value < 0){
            throw new Error('Value cannot be less than 0.');
        }
        this.y = value;
    }
}

export default Point;