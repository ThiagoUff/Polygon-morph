'use strict';

import FeaturePoint from "../shapes/FeaturePoint.js";
import Point from "../shapes/Point.js";
import Polygon from "../shapes/Polygon.js";
import Covariance from "../math/Covariance.js";

export class FeaturePointDetector {
    min_length = 0.001;
    max_angle = 120;
    featureDetection(p) {
        let detected = new Polygon();
        if (p.isClosed()) {
            let count = p.getCount();
            let start, middle, end;
            start = p.getVertex(count - 1);
            middle = p.getVertex(0);
            let polygon_length = p.getLength();
            for (let i = 0; i < count; i++) {
                end = p.getVertex(i);
                if (this.isFeaturePoint(start, middle, end, polygon_length)) {
                    detected.addVertex(new FeaturePoint(middle),true);
                    let Listfp = detected.all_vertices;
                    let fp = Listfp[Listfp.length - 1]  ;
                    fp.setAngle(this.angle);
                }
                else {
                    detected.addVertex(new Point(middle.getX(), middle.getY()),false);
                }
                start = middle;
                middle = end;
            }
            end = p.getVertex(0);
            if (this.isFeaturePoint(start, middle, end, polygon_length)) {
                detected.addVertex(new FeaturePoint(middle), true);
                let Listfp = detected.getFeaturePoints();
                let fp = Listfp[Listfp.length - 1];
                fp.setAngle(this.angle);
            }
            else {
                detected.addVertex(new Point(middle.getX(), middle.getY()),false);
                detected.close();
            }
        }
        return detected;
    }

    isFeaturePoint(start, middle, end, polygon_length) {
        let start_middle_x, start_middle_y, end_middle_x, end_middle_y
        let dotProd, length1, length2, relative_length;

        start_middle_x = start.x - middle.x;
        start_middle_y = start.y - middle.y;
        end_middle_x = end.x - middle.x;
        end_middle_y = end.y - middle.y;

        dotProd = Covariance.dotProduct(start_middle_x, start_middle_y, end_middle_x, end_middle_y);
        length1 = Math.sqrt(Math.pow(start_middle_x, 2)) + Math.pow(start_middle_y,2);
        length2 = Math.sqrt(Math.pow(end_middle_x, 2)) + Math.pow(end_middle_y,2);
        
        this.angle = Math.acos(dotProd/(length1*length2));
        this.angle = this.angle * (180/Math.PI);

        if(this.angle <= this.max_angle){
            relative_length = length1 + length2 / polygon_length
            if(relative_length >= this.min_length)
                return true;
            else
                return false;
        }
        else{
            return false;
        }
    
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
