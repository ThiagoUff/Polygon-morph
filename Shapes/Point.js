export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get y() {
        return this._y;
    }
    set y(v) {
        this._y = v;
    }
    get x() {
        return this._x;
    }
    set x(v) {
        this._x = v;
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
