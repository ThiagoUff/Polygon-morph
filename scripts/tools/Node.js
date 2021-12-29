export class Node {
    // Node(){}
    // Node(sourcePoint: FeaturePoint, targetPoint: FeaturePoint){}
    // Node(sourcePoint: FeaturePoint, targetPoint: FeaturePoint, simcosts: number){}
    // Node(x: number, y: number){}
    // Node(x: number, y: number, simcost: number){}
    // Node(x: number, y: number, sourcePoint: FeaturePoint, targetPoint: FeaturePoint){}
    Node(x, y, sourcePoint, targetPoint, simsosts) {
        this.x = x;
        this.y = y;
        this.sourcePoint = sourcePoint;
        this.targetPoint = targetPoint;
        this.similarity_costs = simsosts;
    }
    setX(x) { }
    getX() { return null; }
    setY(y) { }
    getY() { return null; }
    setSourcePoint(sourcePoint) { }
    getSourcePoint() { return null; }
    setTargetPoint(targetPoint) { }
    getTargetPoint() { return null; }
    setSimCosts(simcost) { }
    setPredecessor(pred) { }
    getPredecessor() { return null; }
    equals(other) { return null; }
    equalsComplete(other) { return null; }
    getSimCosts() { return null; }
    setPathCosts(path_costs) { }
    getPathCosts() { return null; }
    clone() { }
    toString() { }
}
//# sourceMappingURL=Node.js.map