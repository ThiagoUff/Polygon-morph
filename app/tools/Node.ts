import FeaturePoint from "../shapes/FeaturePoint"

export class Node {
    x: number
    y: number
    similarity_costs: number
    optimal_predecessor: Node
    path_costs: number
    sourcePoint: FeaturePoint
    targetPoint: FeaturePoint

    // Node(){}
    // Node(sourcePoint: FeaturePoint, targetPoint: FeaturePoint){}
    // Node(sourcePoint: FeaturePoint, targetPoint: FeaturePoint, simcosts: number){}
    // Node(x: number, y: number){}
    // Node(x: number, y: number, simcost: number){}
    // Node(x: number, y: number, sourcePoint: FeaturePoint, targetPoint: FeaturePoint){}
    Node(x: number, y: number, sourcePoint: FeaturePoint, targetPoint: FeaturePoint, simsosts: number) {
        this.x = x;
        this.y = y;
        this.sourcePoint = sourcePoint;
        this.targetPoint = targetPoint;
        this.similarity_costs = simsosts;
    }
    setX(x: number): void {}
    getX(): number{return null}
    setY(y: number): void{}
    getY(): number{return null}
    setSourcePoint(sourcePoint: FeaturePoint): void{}
    getSourcePoint(): FeaturePoint{return null}
    setTargetPoint(targetPoint: FeaturePoint): void{}
    getTargetPoint(): FeaturePoint{return null}
    setSimCosts(simcost: number): void{}
    setPredecessor(pred: Node): void{}
    getPredecessor(): Node {return null}
    equals(other: Node): boolean{return null}
    equalsComplete(other: Node): boolean{return null}
    getSimCosts(): number{return null}
    setPathCosts(path_costs: number): void{}
    getPathCosts(): number{return null}
    clone():void{}
        toString(): void {}
}