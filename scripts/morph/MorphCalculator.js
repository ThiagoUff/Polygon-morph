import FeaturePoint from "../shapes/FeaturePoint.js";
import Point from "../shapes/Point.js";
import Polygon from "../shapes/Polygon.js"
import Path from "../tools/Path.js";
import Node from "../tools/Node.js";

export class MorphCalculator {

    calculateAllDeltaCost(source, target, skips){
        let dim1 = source.getFeaturePointCount();
        let dim2 = target.getFeaturePointCount();
        let source_index, target_index;
        let delta_field = [dim1][dim2][skips+1][skips+1];

        for (let i = 0; i < dim1; i++) {
            for (let j = 0; j < dim2; j++) {
                for (let k = 0; k < skips; k++) {
                    source_index = (i - k + dim1) % dim1;
                    for (let l = 0; l <= skips; l++) {
                        target_index = (k - l + dim2) % dim2;
                        delta_field[i][j][k][l] = this.deltaCosts(source, target, i, source_index, j, target_index);
                    }
                }
            }
        }
        return delta_field;
    }
    
    deltaCosts(source, target, start_index_s, end_index_s, start_index_t, end_index_t) {
        let cost = 0.0;
        //Nao consegui entender como calcular essa função de discart das featurePoints, apesar de conter a formula no artigo, nao consegui entender como calcular o eigenValue, utilizado na formula.
        cost += this.disCost(source, start_index_s, end_index_s); 
        cost += this.disCost(target, start_index_t, end_index_t); 
        cost += FeaturePoint.calculate_Sim_Cost(source.getFeaturePoint(end_index_s), target.getFeaturePoint(end_index_t));
        return cost;

    }

    disCost(source, start_index_s, end_index_s){
        throw new Error("Function not implemented.");
    }
    //Nao entendi como utilizar esse algoritmo para "plotar" os steps de transformação do polygon inicial para o polygon final.
    calculatePath(source, target, skips) 
    {
        let deltaCosts = this.calculateAllDeltaCost(source, target, skips);
        let dim1 = source.getFeaturePointCount();
        let dim2 = target.getFeaturePointCount();

        let min_path_costs = Number.MAX_VALUE;
        let path = new Path();
        let current_node;
        let field = Node[dim1][dim2];
        let i; j;
        let source_fps = source.getFeaturePoints();
        let target_fps = target.getFeaturePoints();

        for(let k = 0; k< dim1; k++){
            for(let l = 0; l<dim2; l++){
                field = this.initializeField(field, k, l, source_fps, target_fps);
                field[0][0].setPathCosts(deltaCosts[k][l][0][0])
                for(let i = 1; i< dim1+l; i++){
                    this.setPredecessor(field, i, 0, deltaCosts, k, l, skips);
                }
                for(let i = 1; i< dim2+l; i++){
                    this.setPredecessor(field, 0, i, deltaCosts, k, l, skips);
                }
                for(let i = 1; i< dim1+l; i++){
                    for(let j = 1; j< dim2+l; j++){
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
    //Como nao consegui avançar na parte anterior, nao consegui criar o retorno da inicialização do NO.
    initializeField(field, k, l, source_fps, target_fps){
        throw new Error("Function not implemented.");
    }
    //Nao entendi o funcionamento do mesmo.
    setPredecessor(field, i, arg2, deltaCosts, k, l, skips) {
        throw new Error("Function not implemented.");
    }

}
export default MorphCalculator;






