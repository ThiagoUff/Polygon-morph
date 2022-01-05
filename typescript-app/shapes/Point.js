export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getY() {
        return this.y;
    }
    setY(v) {
        this.y = v;
    }
    getX() {
        return this.x;
    }
    setX(v) {
        this.x = v;
    }
    setConvex() { }
    setConcave() { }
    getConvex() { }
    setCorrespondence() { }
    getCorrespondence() { }
    hasCorrespondence() { }
    clearCorrespondence() { }
    equals(point) {
        return this.x == point.x && this.y == point.y;
    }
    toString() { }
    paint() { }
    contains() { }
    clone() { }
    toSVG() { }
}
export default Point;
