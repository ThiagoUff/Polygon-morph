import FeaturePoint from "../shapes/FeaturePoint.js";
import Point from "../shapes/Point.js";
import Polygon from "../shapes/Polygon.js";

export const FeaturePointDetector ={
    
    featureDetection(p) {
        let detected = new Polygon();
        if (p.isClosed()) {
            let count = p.getCount();
            let start, middle, end;
            start = p.getVertex(count - 1);
            middle = p.getVertex(0);
            let polygon_length = p.getLength();
            for (let i; i < count; i++) {
                end = p.getVertex(i);
                if (this.isFeaturePoint(start, middle, end, polygon_length)) {
                    detected.addVertex(new FeaturePoint(middle));
                    let Listfp = detected.getFeaturePoints();
                    let fp = Listfp[Listfp.length - 1];
                    fp.setAngle(this.angle);
                }
                else {
                    detected.addVertex(new Point(middle.getX(), middle.getY()));
                }
                start = middle;
                middle = end;
            }
            end = p.getVertex(0);
            if (this.isFeaturePoint(start, middle, end, polygon_length)) {
                detected.addVertex(new FeaturePoint(middle));
                let Listfp = detected.getFeaturePoints();
                let fp = Listfp[Listfp.length - 1];
                fp.setAngle(this.angle);
            }
            else {
                detected.addVertex(new Point(middle.getX(), middle.getY()));
                detected.close();
            }
        }
        return detected;
    }
}
export default FeaturePointDetector;

// export class FeaturePointDetector {
//     FeaturePointDetector(max_angle, min_size, max_featurePoints) {
//         this.max_angle = max_angle;
//         this.min_size = min_size;
//         this.max_featurePoints = max_featurePoints;
//     }
    
    
//     filterMostProminent(p) { }
//     isFeaturePoint(start, middle, end, polygon_length) { return null; }
//     setMax_angle(max_angle) { }
//     getMax_angle() { return null; }
//     setMin_size(min_size) { }
//     getMin_size() { return null; }
//     setMax_featurePoints(max_featurePonumbers) { 
//         this.max_featurePonumbers = max_featurePonumbers;
//     }
//     getMax_featurePoints() { return this.max_featurePoints; }
// }
// export default FeaturePointDetector;
