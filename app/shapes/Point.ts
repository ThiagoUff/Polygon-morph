export class Point{
    private x : number;
    private y : number;
    private correspondence : Point
    private MaxX : number
    private MaxY : number
    private Min : number

    constructor(x:number, y: number){
        this.x = x;
        this.y = y;
    }
    public getY() : number {
        return this.y;
    }
    public setY(v : number) {
        this.y = v;
    }
    public getX() : number {
        return this.x;
    }
    public setX(v : number) {
        this.x = v;
    }
    setConvex(){}
    setConcave(){}
    getConvex(){}
    setCorrespondence(){}
    getCorrespondence(){}
    hasCorrespondence(){}
    clearCorrespondence(){}
    equals(point): boolean{
        return this.x==point.x && this.y==point.y
    }
    toString(){}
    paint(){}
    contains(){}
    clone(){}
    toSVG(){}
}
export default Point;
