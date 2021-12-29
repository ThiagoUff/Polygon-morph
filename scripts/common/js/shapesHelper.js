'use strict';

import Polygon from "../../shapes/Polygon.js";
import Point from '../../shapes/Point.js'
import data from "../../data/points.js";
import FeaturePointDetector from "../../featurePointDetection/FeaturePointDetector.js"

export const shapesHelper = {
    
    jsonToPolygon()
    {
        let poly = new Polygon();
         data.forEach(point => {
            poly.addVertex(new Point(point.x, point.y))
        });
        return poly;
    },

    printFP(polygon){
        return FeaturePointDetector.FeaturePonumberDetector(polygon);
    }


}

export default shapesHelper;