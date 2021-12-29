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
    setSourcePoint(sourcePoint: FeaturePoint): void{ throw new Error("Function not implemented.");}
    getSourcePoint(): FeaturePoint{throw new Error("Function not implemented.");}
    setTargetPoint(targetPoint: FeaturePoint): void{ throw new Error("Function not implemented.");}
    getTargetPoint(): FeaturePoint{throw new Error("Function not implemented.");}
    setSimCosts(simcost: number): void{ throw new Error("Function not implemented.");}
    setPredecessor(pred: Node): void{ throw new Error("Function not implemented.");}
    getPredecessor(): Node {throw new Error("Function not implemented.");}
    equals(other: Node): boolean{throw new Error("Function not implemented.");}
    equalsComplete(other: Node): boolean{throw new Error("Function not implemented.");}
    getSimCosts(): number{throw new Error("Function not implemented.");}
    setPathCosts(path_costs: number): void{ throw new Error("Function not implemented.");}
    getPathCosts(): number{throw new Error("Function not implemented.");}
    clone():void{throw new Error("Function not implemented.");}
    toString(): void {throw new Error("Function not implemented.");}
}