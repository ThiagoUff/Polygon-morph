import FeaturePoint from "../shapes/FeaturePoint"
import { Point } from "../shapes/Point"
import Polygon from "../shapes/Polygon"

export class FeaturePointDetector {
    private max_angle: number
    private min_size: number
    private max_featurePoints: number
    private angle: number

    FeaturePonumberDetector(max_angle: number, min_size: number, max_featurePoints: number) {
        this.max_angle = max_angle;
        this.min_size = min_size;
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
    isFeaturePoint(start: Point, middle: Point, end: Point, polygon_length: number): boolean { return null }
    setMax_angle(max_angle: number): void { }
    getMax_angle(): number { return null }
    setMin_size(min_size: number): void { }
    getMin_size(): number { return null }
    setMax_featurePoints(max_featurePonumbers: number): void { }
    getMax_featurePoints(): number { return null }

}
export default FeaturePointDetector;