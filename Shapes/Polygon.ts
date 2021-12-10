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
        return this.all_vertices.find(x=> x.equals(p))==undefined
    } 
}
export default Polygon;
