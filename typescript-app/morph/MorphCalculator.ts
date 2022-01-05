import FeaturePoint from "../shapes/FeaturePoint";
import Point from "../shapes/Point";
import Polygon from "../shapes/Polygon"
import Path from "../tools/Path";
import { Node } from "../tools/Node";

export class MorphCalculator {

    public static calculateAllDeltaCost(source: Polygon, target: Polygon, skips: number): Array<Array<Array<Array<number>>>> {
        let dim1: number = source.getFeaturePointCount();
        let dim2: number = target.getFeaturePointCount();
        let source_index: number, target_index: number;
        let delta_field: Array<Array<Array<Array<number>>>> = new Array<Array<Array<Array<number>>>>();

        for (let i: number = 0; i < dim1; i++) {
            for (let j: number = 0; j < dim2; j++) {
                for (let k: number = 0; k < skips; k++) {
                    source_index = (i - k + dim1) % dim1;
                    for (let l: number = 0; l <= skips; l++) {
                        target_index = (k - l + dim2) % dim2;
                        delta_field[i][j][k][l] = this.deltaCosts(source, target, i, source_index, j, target_index);
                    }
                }
            }
        }
        return delta_field;
    }
    public static deltaCosts(source: Polygon, target: Polygon, start_index_s: number, end_index_s: number, start_index_t: number, end_index_t: number): number {
        let cost: number = 0.0;
        cost += this.disCost(source, start_index_s, end_index_s);
        cost += this.disCost(target, start_index_t, end_index_t);
        cost += FeaturePoint.calculate_Sim_Cost(source.getFeaturePoint(end_index_s), target.getFeaturePoint(end_index_t));

        return cost;

    }

    public static disCost(source: Polygon, start_index_s: number, end_index_s: number): number {
        throw new Error("Function not implemented.");
    }
    public static calculatePath(source: Polygon, target: Polygon, skips: number): Path 
    {
        let deltaCosts: Array<Array<Array<Array<number>>>> = this.calculateAllDeltaCost(source, target, skips);
        let dim1: number = source.getFeaturePointCount();
        let dim2: number = target.getFeaturePointCount();

        let min_path_costs: number = Number.MAX_VALUE;
        let path: Path = new Path();
        let current_node: Node;
        let field: Array<Array<Node>> = new Array<Array<Node>>();
        let i:number; j: Number;
        let source_fps: Array<Point> = source.getFeaturePoints();
        let target_fps: Array<Point> = target.getFeaturePoints();

        for(let k: number = 0; k< dim1; k++){
            for(let l:number = 0; l<dim2; l++){
                field = this.initializeField(field, k, l, source_fps, target_fps);
                field[0][0].setPathCosts(deltaCosts[k][l][0][0])
                for(let i: number = 1; i< dim1+l; i++){
                    this.setPredecessor(field, i, 0, deltaCosts, k, l, skips);
                }
                for(let i: number = 1; i< dim2+l; i++){
                    this.setPredecessor(field, 0, i, deltaCosts, k, l, skips);
                }
                for(let i: number = 1; i< dim1+l; i++){
                    for(let j: number = 1; j< dim2+l; j++){
                        this.setPredecessor(field, i, j, deltaCosts, k, l, skips);   
                    }
                }
                current_node = field[dim1][dim2];
                if(current_node.getPathCosts() < min_path_costs){
                    min_path_costs = current_node.getPathCosts();
                    path = new Path();
                    path.add(current_node);
                    path.setCosts(current_node.getPathCosts());
                    while(current_node.getPredecessor() != null){
                        current_node = current_node.getPredecessor();
                        path.add(current_node);
                    }
                }
            }
        }
        return path;
    }
    public static initializeField(field: Node[][], k: number, l: number, source_fps: Point[], target_fps: Point[]): Node[][] {
        throw new Error("Function not implemented.");
    }
    public static setPredecessor(field: Node[][], i: number, arg2: number, deltaCosts: number[][][][], k: number, l: number, skips: number): void {
        throw new Error("Function not implemented.");
    }

}
export default MorphCalculator;






