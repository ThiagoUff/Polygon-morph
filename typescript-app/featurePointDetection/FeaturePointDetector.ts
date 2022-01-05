import Covariance from "../math/Covariance"
import FeaturePoint from "../shapes/FeaturePoint"
import { Point } from "../shapes/Point"
import Polygon from "../shapes/Polygon"

export class FeaturePointDetector {
    private max_angle: number
    private min_length: number
    private max_featurePoints: number
    private angle: number

    FeaturePonumberDetector(max_angle: number, min_length: number, max_featurePoints: number) {
        this.max_angle = max_angle;
        this.min_length = min_length;
        this.max_featurePoints = max_featurePoints
    };
    featureDetection(p: Polygon): Polygon {
        let detected: Polygon = new Polygon();
        if (p.isClosed()) {
            let count: number = p.getCount();
            let start:Point, middle:Point, end: Point;
            start = p.getVertex(count - 1);
            middle = p.getVertex(0);
            let polygon_length: number = p.getLength();
            for (let i: number; i < count; i++) {
                end = p.getVertex(i);
                if (this.isFeaturePoint(start, middle, end, polygon_length)) {
                    detected.addVertex(new FeaturePoint(middle));
                    let Listfp: Array<FeaturePoint> = detected.getFeaturePoints();
                    let fp: FeaturePoint = Listfp[Listfp.length - 1]
                    fp.setAngle(this.angle);
                }
                else{
                    detected.addVertex(new Point(middle.getX(),middle.getY()));
                }
                start = middle;
                middle = end;
            }
            end = p.getVertex(0);
            if (this.isFeaturePoint(start, middle, end, polygon_length)) {
                detected.addVertex(new FeaturePoint(middle));
                let Listfp: Array<FeaturePoint> = detected.getFeaturePoints();
                let fp: FeaturePoint = Listfp[Listfp.length - 1]
                fp.setAngle(this.angle);
            }
            else{
                detected.addVertex(new Point(middle.getX(),middle.getY()));
                detected.close();
            }
        }
        return detected;
    }
    filterMostProminent(p: Polygon): void { }
    isFeaturePoint(start: Point, middle: Point, end: Point, polygon_length: number): boolean {
        let start_middle_x:number, start_middle_y:number, end_middle_x:number, end_middle_y: number
        let dotProd: number, length1: number, length2:number, relative_length: number;

        start_middle_x = start.getX() - middle.getX();
        start_middle_y = start.getY() - middle.getY();
        end_middle_x = end.getX() - middle.getX();
        end_middle_y = end.getY() - middle.getY();

        dotProd = Covariance.dotProduct(start_middle_x, start_middle_y, end_middle_x, end_middle_y);
        length1 = Math.sqrt(Math.pow(start_middle_x, 2)) + Math.pow(start_middle_y,2);
        length2 = Math.sqrt(Math.pow(end_middle_x, 2)) + Math.pow(end_middle_y,2);
        
        this.angle = Math.acos(dotProd/(length1*length2));
        this.angle = this.angle * (180/Math.PI);

        if(this.angle <= this.max_angle){
            relative_length =length1 + length2 / polygon_length
            if(relative_length >= this.min_length)
                return true;
            else
                return false;
        }
        else{
            return false;
        }
    
     }
    setMax_angle(max_angle: number): void { }
    getMax_angle(): number { return null }
    setMin_size(min_size: number): void { }
    getMin_size(): number { return null }
    setMax_featurePoints(max_featurePonumbers: number): void { }
    getMax_featurePoints(): number { return null }

}
export default FeaturePointDetector;