export class Point{
    private _x : number;
    private _y : number;

    constructor(x:number, y: number){
        this.x = x;
        this.y = y;
    }
    public get y() : number {
        return this._y;
    }
    public set y(v : number) {
        this._y = v;
    }
    public get x() : number {
        return this._x;
    }
    public set x(v : number) {
        this._x = v;
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
