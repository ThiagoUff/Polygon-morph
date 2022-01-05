'use strict';

import Polygon from "../../shapes/Polygon.js";
import Point from '../../shapes/Point.js'
import data from "../../data/points.js";
import FeaturePointDetector from "../../featurePointDetection/FeaturePointDetector.js"

export const shapesHelper = {
    
    jsonToPolygon()
    {
        let poly = new Polygon();
        for (let index = 0; index < data.length; index++) {
            poly.addVertex(new Point(data[index].x, data[index].y))
        }
        return poly;
    },

    printFP(polygon){
        let fpd = new FeaturePointDetector();
        let result = fpd.featureDetection(polygon);
        let fps = result.featurePoints;

        fps.forEach(fp => {
            console.log(fp.x)
        }); 
        return result
    }


}

export default shapesHelper;