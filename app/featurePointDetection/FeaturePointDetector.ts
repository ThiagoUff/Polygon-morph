import { Point } from "../shapes/Point"
import Polygon from "../shapes/Polygon"

export class FeaturePonumberDetector {
    private max_angle: number
    private min_size: number
    private max_featurePoints: number
    private angle: number

    FeaturePonumberDetector(max_angle: number, min_size: number, max_featurePoints: number) {
        this.max_angle = max_angle;
        this.min_size = min_size;
        this.max_featurePoints = max_featurePoints
    };
    featureDetection(p: Polygon): Polygon { return null }
    filterMostProminent(p: Polygon): void { }
    isFeaturePonumber(start: Point, middle: Point, end: Point, polygon_length: number): boolean { return null }
    setMax_angle(max_angle: number): void { }
    getMax_angle(): number { return null }
    setMin_size(min_size: number): void { }
    getMin_size(): number { return null }
    setMax_featurePonumbers(max_featurePonumbers: number): void { }
    getMax_featurePonumbers(): number { return null }

}
export default FeaturePonumberDetector;