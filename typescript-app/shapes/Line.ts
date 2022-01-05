import { Point } from "./Point";
export class Line{
    start: Point; //point
    end: Point; // point

    constructor(start: Point, end: Point){
        this.start = start;
        this.end = end;
    }

    setStart(start: Point): void{
        this.start = start; 
    }
    getStart():Point{
        return this.start;
    }
    setEnd(end: Point): void{
        this.end = end;
    }
    getEnd():Point{
        return this.end;
    }
    paint(){}
    contains(point: Point): boolean{
        return this.start.equals(point) || this.end.equals(point)
    }
    toSVG(){}
}
export default Line;