import { Point } from "./Point";
import { FeaturePoint } from "./FeaturePoint";

export class Polygon{
    
    private fp_count: number;
    private total_count: number;
    private featurePoints: Array<FeaturePoint>;
    private all_vertices: Array<Point>;
    private sample_rate: number;
    private lastSamble;
    private closed: boolean;
    private changed: boolean;
    private dashed: boolean;
    private region: number;

    Polygon(start: Point, factor: number){
        this.all_vertices = new Array();
        this.featurePoints = new Array();
        this.all_vertices.push(start)
    }
    
    addVertex(p: Point):void{
        this.all_vertices.push(p);
    }
    getVertex(index: number): Point{
        return this.all_vertices[index];
    }
    isVertex(p: Point): boolean{
        return this.all_vertices.find(x=> x.equals(p))==undefined;
    }
    addVertexBehind(p: Point, q: Point):void{
        this.all_vertices.splice(this.all_vertices.indexOf(q),0,p);
    }
    addVertexBefore(p: Point, q: Point):void{
        this.all_vertices.splice(this.all_vertices.indexOf(q)+1,0,p);
    }
    addVertexBetween(p : Point,q : Point,r : Point) : void{
        this.addVertexBefore(p,q);
    }
    getFeaturePoints() : Array<FeaturePoint>{
        return this.featurePoints;
    }
    getAllVertices() : Array<Point>{
        return this.all_vertices;
    }
    getSample(sample_rate: number) : void{}
    getSampleArray(sample_rate : number) : number[]{
        return null;
    }
    getLength() : number{
        return null;
    }
    close() : void{}
    getFeaturePoint(index : number) : FeaturePoint{
        return this.featurePoints[index];
    }
    getFeaturePointIndex(fp : FeaturePoint) : number{
        return this.featurePoints.indexOf(fp);
    }
    getIndex(p : Point) : number{
        return this.all_vertices.indexOf(p);
    }
    getCount() : number{
        return this.all_vertices.length;
    }
    getFeaturePointCount() : number{
        return this.featurePoints.length;
    }
    setRegion(region : number) : void{}
    getRegion() : number{return null;}
    contains(p : Point) : boolean {return null;} 
    isConvex(p : Point) : boolean{return null;} 
    isClosingPoint(p : Point) : boolean{return null;} 
    isClosed() : boolean{return null;} 
    setAllVerticesToFeaturePoints() : void{}
    setDashed(dashed : boolean) : void{}
    isDashed() : boolean {return null;} 
    preparePolygon(sample_rate : number, range : number) : void {}
    changeSize(factor : number) : void{}
    deleteCorrespondences() : void{}
    toString() : String{return null;} 
    paint(g) : void{}
    clone() : Polygon{return null;} 
    toSVG() : String{return null;} 
    toSVGPath() : String{return null;} 
    toSaveFormat() : String{return null;} 
}
export default Polygon;
