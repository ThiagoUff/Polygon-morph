export class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    setStart(start) {
        this.start = start;
    }
    getStart() {
        return this.start;
    }
    setEnd(end) {
        this.end = end;
    }
    getEnd() {
        return this.end;
    }
    paint() { }
    contains(point) {
        return this.start.equals(point) || this.end.equals(point);
    }
    toSVG() { }
}
export default Line;
